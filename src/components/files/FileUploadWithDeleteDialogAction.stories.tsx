/* eslint-disable react-hooks/rules-of-hooks */

import { Canvas, Controls, Description, Story, Title } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { FC, useCallback, useState } from 'react'
import { ConfirmationDialog, ConfirmationDialogVariant } from '../dialog'
import { DeleteFileAction } from './DeleteFileAction'
import { FileDropZone } from './FileDropZone'
import { FileList } from './FileList'
import { FileListItem } from './FileListItem'
import { FileUploadContainer } from './FileUploadContainer'
import { FileSpace, FileState, FileUploadObject } from './FileUploadState'
import { FileUploadOnUploadSingle, useFileUpload } from './useFileUpload'
import { useMockedUploadApi } from './useMockedUploadApi'

export type CustomRemoteFile = {
  id: number
  name: string
  size: number
}

export type DeleteUploadedFileDialogState =
  | {
      isOpen: false
    }
  | {
      isOpen: true
      fileItem: FileUploadObject<CustomRemoteFile>
    }

type DemoComponentType = FC<{
  autoUpload: boolean
}>
const DemoComponent = () => null

const meta = {
  component: DemoComponent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Canvas>
            <Story of={WithDeleteDialog} />
          </Canvas>
          <Controls of={WithDeleteDialog} />
        </>
      ),
    },
  },
} satisfies Meta<DemoComponentType>

export default meta
type Story = StoryObj<DemoComponentType>

export const WithDeleteDialog: Story = {
  render: () => {
    const { remoteFile, mutateRemoteFiles, axiosInstance } = useMockedUploadApi(
      {
        multipleFiles: false,
        initialFile: { id: 1, name: 'file1.pdf', size: 1024 },
      },
    )

    const onUpload = useCallback<FileUploadOnUploadSingle>(
      async (file, { onProgress, onError, onSuccess }) => {
        const formData = new FormData()
        formData.append('file', file)

        try {
          await axiosInstance.post('/upload', formData, {
            onUploadProgress: (event) => {
              if (event.total) {
                onProgress(event.loaded / event.total)
              }
            },
          })
          onSuccess()
        } catch {
          onError('File upload failed')
        }

        await mutateRemoteFiles()
      },
      [axiosInstance, mutateRemoteFiles],
    )

    const { fileUploadObjects, isUploading, removeFile, addFilesToUpload } =
      useFileUpload<CustomRemoteFile>({
        remoteFile,
        fileUploadObjectIsFile: (fileUploadObject, file) =>
          fileUploadObject.file.name === file.name,
        onUpload,
      })

    const handleDelete = (
      fileUploadObject: FileUploadObject<CustomRemoteFile>,
    ) => {
      if (fileUploadObject.space === FileSpace.Local) {
        removeFile(fileUploadObject.file)
      } else {
        setDeleteDialogState({
          isOpen: true,
          fileItem: fileUploadObject,
        })
      }
    }

    const onDelete = async (
      fileUploadObject: FileUploadObject<CustomRemoteFile>,
    ) => {
      setIsDeleting(true)
      try {
        await axiosInstance.post('/delete')
        removeFile(fileUploadObject.file)
      } catch {
        // handle error here
      } finally {
        setIsDeleting(false)
        setDeleteDialogState({ isOpen: false })
      }
    }

    const [deleteDialogState, setDeleteDialogState] =
      useState<DeleteUploadedFileDialogState>({ isOpen: false })

    const [isDeleting, setIsDeleting] = useState(false)

    return (
      <FileUploadContainer>
        {fileUploadObjects.length === 0 && (
          <FileDropZone
            onSelect={addFilesToUpload}
            fileTypes={['pdf']}
            maxFileSize={1000000}
          />
        )}
        {fileUploadObjects.length > 0 && (
          <FileList>
            {fileUploadObjects.map((fileUploadObject) => (
              <FileListItem
                key={fileUploadObject.id}
                fileUploadObject={fileUploadObject}
                renderRemoteFileName={(remoteFile) => remoteFile.name}
                renderRemoteFileSize={(remoteFile) => remoteFile.size}
                disabled={
                  isUploading && fileUploadObject.state !== FileState.Uploading
                }
                fileActions={
                  <DeleteFileAction
                    fileUploadObject={fileUploadObject}
                    onDelete={handleDelete}
                  />
                }
              />
            ))}
          </FileList>
        )}
        {deleteDialogState.isOpen && (
          <ConfirmationDialog
            variant={ConfirmationDialogVariant.Critical}
            disableConfirm={isDeleting}
            disableDismiss={isDeleting}
            onConfirm={() => void onDelete(deleteDialogState.fileItem)}
            onDismiss={() => {
              setDeleteDialogState({ isOpen: false })
            }}
            title="Delete file"
            body="Are you sure you want to delete the file?"
            confirmButtonText="Delete"
            dismissButtonText="Cancel"
          />
        )}
      </FileUploadContainer>
    )
  },
}
