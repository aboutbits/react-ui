/* eslint-disable react-hooks/rules-of-hooks */

import {
  Canvas,
  Controls,
  Description,
  Story,
  Subheading,
  Title,
} from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { AxiosResponse } from 'axios'
import { FC, useCallback } from 'react'
import { Button } from '../button'
import { Size } from '../types'
import { DeleteFileAction } from './DeleteFileAction'
import { DownloadFileAction } from './DownloadFileAction'
import { FileDropZone } from './FileDropZone'
import { FileList } from './FileList'
import { FileListItem } from './FileListItem'
import { FileUploadContainer } from './FileUploadContainer'
import { FileSpace, FileState, FileUploadObject } from './FileUploadState'
import {
  FileUploadOnUploadMulitple,
  FileUploadOnUploadSingle,
  useFileUpload,
} from './useFileUpload'
import { useHumanReadableFileSize } from './useHumanReadableFIleSize'
import { useMockedUploadApi } from './useMockedUploadApi'

export type CustomRemoteFile = {
  id: number
  name: string
  size: number
}

type DemoComponentType = FC<{
  autoUpload: boolean
}>
const DemoComponent = () => null

const meta = {
  component: DemoComponent,
  args: {
    autoUpload: true,
  },
  argTypes: {
    autoUpload: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Subheading>Single file</Subheading>
          <Canvas>
            <Story of={Single} />
          </Canvas>
          <Controls of={Single} />
          <Subheading>Multiple files</Subheading>
          <Canvas>
            <Story of={Multiple} />
          </Canvas>
          <Controls of={Multiple} />
        </>
      ),
    },
  },
} satisfies Meta<DemoComponentType>

export default meta
type Story = StoryObj<DemoComponentType>

export const Single: Story = {
  render: ({ autoUpload }) => {
    const { remoteFile, mutateRemoteFiles, axiosInstance } = useMockedUploadApi(
      {
        multipleFiles: false,
        initialFile: { id: 1, name: 'file1.pdf', size: 1024 },
      },
    )

    const formatFileSize = useHumanReadableFileSize()

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
          onError('File could not be uploaded')
        }

        await mutateRemoteFiles()
      },
      [axiosInstance, mutateRemoteFiles],
    )

    const {
      fileUploadObjects,
      isUploading,
      triggerUpload,
      removeFile,
      addFilesToUpload,
    } = useFileUpload<CustomRemoteFile>({
      remoteFile,
      fileUploadObjectIsFile: (fileUploadObject, file) =>
        fileUploadObject.file.name === file.name,
      onUpload,
      autoUpload,
    })

    const handleDelete = async (
      fileUploadObject: FileUploadObject<CustomRemoteFile>,
    ) => {
      if (fileUploadObject.space === FileSpace.Local) {
        removeFile(fileUploadObject.file)
      } else {
        await axiosInstance.post('/delete')
        removeFile(fileUploadObject.file)
      }
    }

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
                renderRemoteFileDescription={(remoteFile) =>
                  formatFileSize(remoteFile.size)
                }
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
        {!autoUpload && (
          <Button size={Size.Md} onClick={void triggerUpload} className="mt-8">
            Upload
          </Button>
        )}
      </FileUploadContainer>
    )
  },
}

export const Multiple: Story = {
  render: ({ autoUpload }) => {
    const { remoteFiles, mutateRemoteFiles, axiosInstance } =
      useMockedUploadApi({
        multipleFiles: true,
        initialFiles: [
          { id: 1, name: 'file1.pdf', size: 1000 },
          { id: 2, name: 'file2.pdf', size: 2000 },
          { id: 3, name: 'blank.pdf', size: 3000 },
        ],
      })
    const formatFileSize = useHumanReadableFileSize()

    const onUpload = useCallback<FileUploadOnUploadMulitple>(
      async (files, { onProgress, onError, onSuccess }) => {
        await Promise.allSettled(
          files.map(async (file) => {
            const formData = new FormData()
            formData.append('file', file)

            try {
              await axiosInstance.post('/upload', formData, {
                onUploadProgress: (event) => {
                  if (event.total) {
                    onProgress(file, event.loaded / event.total)
                  }
                },
              })
              onSuccess(file)
            } catch {
              onError(file, 'File could not be uploaded')
            }
          }),
        )
        await mutateRemoteFiles()
      },
      [axiosInstance, mutateRemoteFiles],
    )

    const { fileUploadObjects, triggerUpload, removeFile, addFilesToUpload } =
      useFileUpload({
        remoteFiles,
        fileUploadObjectIsFile: (fileUploadObject, file) =>
          fileUploadObject.file.name === file.name,
        onUpload,
        multipleFiles: true,
        autoUpload,
      })

    const handleDelete = async (
      fileUploadObject: FileUploadObject<CustomRemoteFile>,
    ) => {
      if (fileUploadObject.space === FileSpace.Local) {
        removeFile(fileUploadObject.file)
      } else {
        await axiosInstance.post('/delete')
        removeFile(fileUploadObject.file)
      }
    }

    const handleDownload = async (
      fileUploadObject: FileUploadObject<CustomRemoteFile>,
    ): Promise<void> => {
      try {
        const fileName: string = fileUploadObject.file.name
        const response: AxiosResponse<Blob> = await axiosInstance.get(
          '/download',
          {
            params: { fileName },
            responseType: 'blob',
          },
        )

        const downloadUrl: string = URL.createObjectURL(response.data)
        const a: HTMLAnchorElement = document.createElement('a')
        a.href = downloadUrl
        a.download = fileName
        document.body.appendChild(a)
        a.click()
        a.remove()
      } catch (error) {
        // Handle error here
        console.error('Download failed:', error)
      }
    }

    return (
      <FileUploadContainer>
        <FileDropZone
          multipleFiles
          onSelect={addFilesToUpload}
          fileTypes={['pdf']}
        />
        {fileUploadObjects.length > 0 && (
          <FileList>
            {fileUploadObjects.map((fileUploadObject) => (
              <FileListItem
                key={fileUploadObject.id}
                fileUploadObject={fileUploadObject}
                renderRemoteFileName={(remoteFile) => remoteFile.name}
                renderRemoteFileDescription={(remoteFile) =>
                  formatFileSize(remoteFile.size)
                }
                fileActions={
                  <>
                    <DownloadFileAction
                      fileUploadObject={fileUploadObject}
                      onDownload={handleDownload}
                    />
                    <DeleteFileAction
                      fileUploadObject={fileUploadObject}
                      onDelete={handleDelete}
                    />
                  </>
                }
              />
            ))}
          </FileList>
        )}
        {!autoUpload && (
          <Button
            size={Size.Md}
            onClick={() => void triggerUpload()}
            className="mt-8"
          >
            Upload
          </Button>
        )}
      </FileUploadContainer>
    )
  },
}
