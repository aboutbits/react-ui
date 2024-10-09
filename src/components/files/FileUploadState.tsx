export enum FileState {
  ToUpload = 'TO_UPLOAD',
  Uploading = 'UPLOADING',
  Uploaded = 'UPLOADED',
  Failed = 'FAILED',
}

export enum FileSpace {
  Local = 'LOCAL',
  Remote = 'REMOTE',
}

type FileUploadProgress = number | undefined

export type FileUploadObject<TRemoteFile = unknown> = {
  id: string
} & (
  | {
      state: FileState.ToUpload
      space: FileSpace.Local
      prevState: undefined
      file: File
    }
  | {
      state: FileState.Uploading
      space: FileSpace.Local
      prevState: undefined | FileState
      file: File
      progress: FileUploadProgress
    }
  | {
      state: FileState.Uploaded
      space: FileSpace.Remote
      prevState: undefined | FileState
      file: TRemoteFile
    }
  | {
      state: FileState.Uploaded
      space: FileSpace.Local
      prevState: undefined | FileState
      file: File
    }
  | {
      state: FileState.Failed
      space: FileSpace.Local
      prevState: undefined | FileState
      file: File
      message: string | undefined
    }
)

export type FileUploadOptions = {
  /** Whether multiple files can be selected. */
  multipleFiles?: boolean
}

export type FileUploadState<TRemoteFile> = {
  fileUploadObjects: FileUploadObject<TRemoteFile>[]
  options?: FileUploadOptions
}

export enum FileUploadActionType {
  AddFileToUpload = 'ADD_FILE_TO_UPLOAD',
  AddFailedFile = 'ADD_FAILED_FILE',
  OverwriteUploadedFiles = 'OVERWRITE_UPLOADED_FILES',
  SetFileToUploading = 'SET_FILE_TO_UPLOADING',
  SetFileToUploaded = 'SET_FILE_TO_UPLOADED',
  SetFileToFailed = 'SET_FILE_TO_FAILED',
  UpdateFileUploadProgress = 'UPDATE_FILE_UPLOAD_PROGRESS',
  RemoveFileRemote = 'REMOVE_FILE_FROM_REMOTE',
  RemoveFileLocal = 'REMOVE_FILE_LOCAL',
}

export type FileUploadAction<TRemoteFile> =
  | {
      type: FileUploadActionType.AddFileToUpload
      file: File
    }
  | {
      type: FileUploadActionType.AddFailedFile
      file: File
      message: string | undefined
    }
  | {
      type: FileUploadActionType.OverwriteUploadedFiles
      files: TRemoteFile[]
    }
  | {
      type: FileUploadActionType.SetFileToUploading
      file: File
      progress: FileUploadProgress
    }
  | {
      type: FileUploadActionType.SetFileToUploaded
      file: File
      uploadedFile?: TRemoteFile
    }
  | {
      type: FileUploadActionType.SetFileToFailed
      file: File
      message: string | undefined
    }
  | {
      type: FileUploadActionType.UpdateFileUploadProgress
      file: File
      progress: FileUploadProgress
    }
  | {
      type: FileUploadActionType.RemoveFileLocal
      file: File
    }
  | {
      type: FileUploadActionType.RemoveFileRemote
      file: TRemoteFile
    }

export function getFileUploadReducer<TRemoteFile>({
  fileUploadObjectIsFile,
}: {
  fileUploadObjectIsFile: (
    fileUploadObject: FileUploadObject<TRemoteFile>,
    file: File | TRemoteFile,
  ) => boolean
}) {
  return function fileUploadReducer(
    state: FileUploadState<TRemoteFile>,
    action: FileUploadAction<TRemoteFile>,
  ): FileUploadState<TRemoteFile> {
    const fileUploadObjectIsFileInSpace = (
      a: FileUploadObject<TRemoteFile>,
      b: File | TRemoteFile,
      spaceB: FileSpace,
    ) => fileUploadObjectIsFile(a, b) && a.space === spaceB

    switch (action.type) {
      case FileUploadActionType.AddFileToUpload: {
        const sameFile = state.fileUploadObjects.find((fileUploadObject) =>
          fileUploadObjectIsFileInSpace(
            fileUploadObject,
            action.file,
            FileSpace.Local,
          ),
        )
        if (sameFile) {
          if (sameFile.state === FileState.Failed) {
            state.fileUploadObjects = state.fileUploadObjects.filter(
              (fileUploadObject) =>
                !fileUploadObjectIsFileInSpace(
                  fileUploadObject,
                  sameFile.file,
                  sameFile.space,
                ),
            )
          } else {
            return state
          }
        }
        return {
          ...state,
          fileUploadObjects: [
            ...(state.options?.multipleFiles
              ? state.fileUploadObjects.filter(
                  (fileUploadObject) =>
                    !fileUploadObjectIsFileInSpace(
                      fileUploadObject,
                      action.file,
                      FileSpace.Local,
                    ),
                )
              : state.fileUploadObjects.filter(
                  (fileUploadObject) =>
                    fileUploadObject.space !== FileSpace.Local,
                )),
            {
              id: uniqueID(),
              state: FileState.ToUpload,
              space: FileSpace.Local,
              prevState: undefined,
              file: action.file,
            },
          ],
        }
      }
      case FileUploadActionType.AddFailedFile: {
        const fileUploadObject = state.fileUploadObjects.find(
          (fileUploadObject) =>
            fileUploadObjectIsFileInSpace(
              fileUploadObject,
              action.file,
              FileSpace.Local,
            ),
        )

        return {
          ...state,
          fileUploadObjects: [
            ...(state.options?.multipleFiles
              ? state.fileUploadObjects.filter(
                  (fileUploadObject) =>
                    !fileUploadObjectIsFileInSpace(
                      fileUploadObject,
                      action.file,
                      FileSpace.Local,
                    ),
                )
              : state.fileUploadObjects.filter(
                  (fileUploadObject) =>
                    fileUploadObject.space !== FileSpace.Local,
                )),
            {
              id: fileUploadObject?.id ?? uniqueID(),
              state: FileState.Failed,
              space: FileSpace.Local,
              prevState: fileUploadObject?.state,
              file: action.file,
              message: action.message,
            },
          ],
        }
      }
      case FileUploadActionType.OverwriteUploadedFiles:
        return {
          ...state,
          fileUploadObjects: [
            ...action.files
              .slice(0, state.options?.multipleFiles ? undefined : 1)
              .map((file) => {
                const existingObjectLocal = state.fileUploadObjects.find(
                  (fileUploadObject) =>
                    fileUploadObjectIsFileInSpace(
                      fileUploadObject,
                      file,
                      FileSpace.Local,
                    ),
                )

                if (existingObjectLocal) {
                  return {
                    id: existingObjectLocal.id,
                    state: FileState.Uploaded,
                    space: FileSpace.Remote,
                    prevState:
                      existingObjectLocal.state === FileState.Uploaded
                        ? existingObjectLocal.prevState
                        : existingObjectLocal.state,
                    file,
                  } as const
                }

                const existingObjectRemote = state.fileUploadObjects.find(
                  (fileUploadObject) =>
                    fileUploadObjectIsFileInSpace(
                      fileUploadObject,
                      file,
                      FileSpace.Remote,
                    ),
                )

                if (existingObjectRemote) {
                  return {
                    ...existingObjectRemote,
                    state: FileState.Uploaded,
                    space: FileSpace.Remote,
                    file,
                  } as const
                }

                return {
                  id: uniqueID(),
                  state: FileState.Uploaded,
                  space: FileSpace.Remote,
                  prevState: undefined,
                  file,
                } as const
              }),
            ...state.fileUploadObjects.filter(
              (fileUploadObject) =>
                fileUploadObject.state !== FileState.Uploaded,
            ),
          ],
        }
      case FileUploadActionType.SetFileToUploading:
        return {
          ...state,
          fileUploadObjects: state.fileUploadObjects.map((fileUploadObject) =>
            fileUploadObjectIsFileInSpace(
              fileUploadObject,
              action.file,
              FileSpace.Local,
            )
              ? {
                  id: fileUploadObject.id,
                  state: FileState.Uploading,
                  space: FileSpace.Local,
                  prevState: fileUploadObject.state,
                  file: action.file,
                  progress: action.progress,
                }
              : fileUploadObject,
          ),
        }
      case FileUploadActionType.SetFileToUploaded: {
        const filteredFileUploadObjects = state.options?.multipleFiles
          ? state.fileUploadObjects
          : state.fileUploadObjects.filter(
              (fileUploadObject) =>
                fileUploadObject.state !== FileState.Uploaded,
            )

        return {
          ...state,
          fileUploadObjects: filteredFileUploadObjects.map(
            (fileUploadObject) =>
              fileUploadObjectIsFileInSpace(
                fileUploadObject,
                action.file,
                FileSpace.Local,
              )
                ? 'uploadedFile' in action && action.uploadedFile
                  ? {
                      id: fileUploadObject.id,
                      state: FileState.Uploaded,
                      space: FileSpace.Remote,
                      prevState: fileUploadObject.state,
                      file: action.uploadedFile,
                    }
                  : {
                      id: fileUploadObject.id,
                      state: FileState.Uploaded,
                      space: FileSpace.Local,
                      prevState: fileUploadObject.state,
                      file: action.file,
                    }
                : fileUploadObject,
          ),
        }
      }
      case FileUploadActionType.SetFileToFailed:
        return {
          ...state,
          fileUploadObjects: state.fileUploadObjects.map((fileUploadObject) =>
            fileUploadObjectIsFileInSpace(
              fileUploadObject,
              action.file,
              FileSpace.Local,
            )
              ? {
                  id: fileUploadObject.id,
                  state: FileState.Failed,
                  space: FileSpace.Local,
                  prevState: fileUploadObject.state,
                  file: action.file,
                  message: action.message,
                }
              : fileUploadObject,
          ),
        }
      case FileUploadActionType.UpdateFileUploadProgress:
        return {
          ...state,
          fileUploadObjects: state.fileUploadObjects.map((fileUploadObject) =>
            fileUploadObjectIsFileInSpace(
              fileUploadObject,
              action.file,
              FileSpace.Local,
            )
              ? {
                  id: fileUploadObject.id,
                  state: FileState.Uploading,
                  space: FileSpace.Local,
                  prevState: fileUploadObject.state,
                  file: action.file,
                  progress: action.progress,
                }
              : fileUploadObject,
          ),
        }
      case FileUploadActionType.RemoveFileLocal: {
        return {
          ...state,
          fileUploadObjects: state.fileUploadObjects.filter(
            (fileUploadObject) =>
              !fileUploadObjectIsFileInSpace(
                fileUploadObject,
                action.file,
                FileSpace.Local,
              ),
          ),
        }
      }
      case FileUploadActionType.RemoveFileRemote: {
        return {
          ...state,
          fileUploadObjects: state.fileUploadObjects.filter(
            (fileUploadObject) =>
              !fileUploadObjectIsFileInSpace(
                fileUploadObject,
                action.file,
                FileSpace.Remote,
              ),
          ),
        }
      }
    }
  }
}

function uniqueID() {
  return String(Math.floor(Math.random() * Date.now()))
}
