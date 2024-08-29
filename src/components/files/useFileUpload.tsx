import { Dispatch, useCallback, useEffect, useMemo, useReducer } from 'react'
import {
  FileState,
  FileUploadAction,
  FileUploadActionType,
  FileUploadObject,
  getFileUploadReducer,
} from './FileUploadState'

export type FileUploadOnUploadSingle<TRemoteFile = never> = (
  file: File,
  events: {
    onProgress: (progress: number | undefined) => void
    onError: (errorMessage: string) => void
    onSuccess: (uploadedFile?: TRemoteFile) => void
  },
) => Promise<void> | Promise<TRemoteFile>

export type FileUploadOnUploadMulitple<TRemoteFile = never> = (
  files: File[],
  events: {
    onProgress: (file: File, progress: number | undefined) => void
    onError: (file: File, errorMessage: string) => void
    onSuccess: (file: File, uploadedFile?: TRemoteFile) => void
  },
) => Promise<void> | Promise<TRemoteFile>

export type UseFileUploadPropsSingle<TRemoteFile> = {
  fileUploadObjectIsFile: (
    fileUploadObject: FileUploadObject<TRemoteFile>,
    file: File | TRemoteFile,
  ) => boolean
  onUpload: FileUploadOnUploadSingle<TRemoteFile>
  autoUpload?: boolean
  multipleFiles?: false
  remoteFile?: TRemoteFile
}

export type UseFileUploadReturnSingle<TRemoteFile> = {
  fileUploadObjects: FileUploadObject<TRemoteFile>[]
  isUploading: boolean
  dispatch: Dispatch<FileUploadAction<TRemoteFile>>
  removeFile: (file: File | TRemoteFile) => void
  triggerUpload: () => Promise<void>
  overwriteUploadedFiles: (files: TRemoteFile[]) => void
  addFilesToUpload: (file: File) => void
}

export type UseFileUploadPropsMultiple<TRemoteFile> = {
  fileUploadObjectIsFile: (
    fileUploadObject: FileUploadObject<TRemoteFile>,
    file: File | TRemoteFile,
  ) => boolean
  onUpload: FileUploadOnUploadMulitple<TRemoteFile>
  autoUpload?: boolean
  multipleFiles: true
  remoteFiles?: TRemoteFile[]
}

export type UseFileUploadReturnMultiple<TRemoteFile> = {
  fileUploadObjects: FileUploadObject<TRemoteFile>[]
  isUploading: boolean
  dispatch: Dispatch<FileUploadAction<TRemoteFile>>
  removeFile: (file: File | TRemoteFile) => void
  triggerUpload: () => Promise<void>
  overwriteUploadedFiles: (files: TRemoteFile[]) => void
  addFilesToUpload: (files: File[]) => void
}

export function useFileUpload<TRemoteFile = unknown>(
  props: UseFileUploadPropsMultiple<TRemoteFile>,
): UseFileUploadReturnMultiple<TRemoteFile>

export function useFileUpload<TRemoteFile = unknown>(
  props: UseFileUploadPropsSingle<TRemoteFile>,
): UseFileUploadReturnSingle<TRemoteFile>

export function useFileUpload<TRemoteFile = unknown>({
  remoteFile,
  remoteFiles,
  fileUploadObjectIsFile,
  onUpload,
  multipleFiles,
  autoUpload = true,
}: {
  fileUploadObjectIsFile: (
    fileUploadObject: FileUploadObject<TRemoteFile>,
    file: File | TRemoteFile,
  ) => boolean
  onUpload:
    | FileUploadOnUploadSingle<TRemoteFile>
    | FileUploadOnUploadMulitple<TRemoteFile>
  autoUpload?: boolean
  multipleFiles?: boolean
  remoteFile?: TRemoteFile
  remoteFiles?: TRemoteFile[]
}) {
  const [state, dispatch] = useReducer(
    getFileUploadReducer<TRemoteFile>({ fileUploadObjectIsFile }),
    {
      fileUploadObjects: [],
      options: {
        multipleFiles,
      },
    },
  )

  const removeFile = useCallback(
    (file: File | TRemoteFile) => {
      if (file instanceof File) {
        dispatch({
          type: FileUploadActionType.RemoveFileLocal,
          file,
        })
      } else {
        dispatch({
          type: FileUploadActionType.RemoveFileRemote,
          file,
        })
      }
    },
    [dispatch],
  )

  const overwriteUploadedFiles = useCallback(
    (files: TRemoteFile[]) => {
      dispatch({
        type: FileUploadActionType.OverwriteUploadedFiles,
        files,
      })
    },
    [dispatch],
  )

  const addFilesToUpload = useCallback(
    (fileOrFiles: File | File[]) => {
      if (Array.isArray(fileOrFiles)) {
        fileOrFiles.forEach((file) => {
          dispatch({
            type: FileUploadActionType.AddFileToUpload,
            file,
          })
        })
      } else {
        dispatch({
          type: FileUploadActionType.AddFileToUpload,
          file: fileOrFiles,
        })
      }
    },
    [dispatch],
  )

  const triggerUpload = useCallback(async () => {
    const filesItemsToUpload = state.fileUploadObjects.filter(
      (
        fileUploadObject,
      ): fileUploadObject is Extract<
        FileUploadObject<TRemoteFile>,
        { state: FileState.ToUpload }
      > => fileUploadObject.state === FileState.ToUpload,
    )

    filesItemsToUpload.forEach(({ file }) => {
      dispatch({
        type: FileUploadActionType.SetFileToUploading,
        file,
        progress: undefined,
      })
    })

    if (multipleFiles) {
      await (onUpload as FileUploadOnUploadMulitple<TRemoteFile>)(
        filesItemsToUpload.map(({ file }) => file),
        {
          onProgress: (file, progress) => {
            dispatch({
              type: FileUploadActionType.UpdateFileUploadProgress,
              file,
              progress,
            })
          },
          onError: (file, errorMessage) => {
            dispatch({
              type: FileUploadActionType.SetFileToFailed,
              file,
              message: errorMessage,
            })
          },
          onSuccess: (file, uploadedFile) => {
            dispatch({
              type: FileUploadActionType.SetFileToUploaded,
              file,
              uploadedFile,
            })
          },
        },
      )
    } else {
      const fileToUpload = filesItemsToUpload[0]

      if (!fileToUpload) {
        return
      }

      await (onUpload as FileUploadOnUploadSingle<TRemoteFile>)(
        fileToUpload.file,
        {
          onProgress: (progress) => {
            dispatch({
              type: FileUploadActionType.UpdateFileUploadProgress,
              file: fileToUpload.file,
              progress,
            })
          },
          onError: (errorMessage) => {
            dispatch({
              type: FileUploadActionType.SetFileToFailed,
              file: fileToUpload.file,
              message: errorMessage,
            })
          },
          onSuccess: (uploadedFile) => {
            dispatch({
              type: FileUploadActionType.SetFileToUploaded,
              file: fileToUpload.file,
              uploadedFile,
            })
          },
        },
      )
    }
  }, [dispatch, state, onUpload, multipleFiles])

  useEffect(() => {
    if (remoteFiles !== undefined) {
      overwriteUploadedFiles(remoteFiles)
    }
    if (remoteFile !== undefined) {
      overwriteUploadedFiles([remoteFile])
    }
  }, [overwriteUploadedFiles, remoteFile, remoteFiles])

  useEffect(() => {
    if (!autoUpload) {
      return
    }

    const hasFilesToUpload = state.fileUploadObjects.some(
      (fileUploadObject) => fileUploadObject.state === FileState.ToUpload,
    )

    if (hasFilesToUpload) {
      void triggerUpload()
    }
  }, [state.fileUploadObjects, autoUpload, triggerUpload])

  const isUploading = useMemo(
    () =>
      state.fileUploadObjects.some(
        (fileUploadObject) => fileUploadObject.state === FileState.Uploading,
      ),
    [state.fileUploadObjects],
  )

  return {
    fileUploadObjects: state.fileUploadObjects,
    isUploading,
    dispatch,
    removeFile,
    triggerUpload,
    overwriteUploadedFiles,
    addFilesToUpload,
  }
}
