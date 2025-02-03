import axios, { AxiosRequestConfig } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { useCallback, useRef, useState } from 'react'
import { CustomRemoteFile } from './FileUpload.stories'

export function useMockedUploadApi(options: {
  multipleFiles?: false
  initialFile: CustomRemoteFile
  shouldFail?: boolean
}): {
  remoteFile: CustomRemoteFile
  mutateRemoteFiles: () => Promise<void>
  axiosInstance: typeof axios
}

export function useMockedUploadApi(options: {
  multipleFiles: true
  initialFiles: CustomRemoteFile[]
  shouldFail?: boolean
}): {
  remoteFiles: CustomRemoteFile[]
  mutateRemoteFiles: () => Promise<void>
  axiosInstance: typeof axios
}

export function useMockedUploadApi({
  multipleFiles,
  initialFile,
  initialFiles,
  shouldFail,
}: {
  multipleFiles?: boolean
  initialFile?: CustomRemoteFile
  initialFiles?: CustomRemoteFile[]
  shouldFail?: boolean
}) {
  const serverFiles = useRef<CustomRemoteFile[]>(
    initialFiles ?? (initialFile ? [initialFile] : []),
  )

  const axiosInstance = axios.create()

  const mock = new MockAdapter(axiosInstance)

  const randomNumber = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min

  const sleep = (value: number) =>
    new Promise((resolve) => setTimeout(resolve, value))

  mock
    .onPost('/upload')
    .reply(async ({ data, onUploadProgress }: AxiosRequestConfig<FormData>) => {
      const total = 1024
      const speed = randomNumber(100, 400)

      await sleep(speed)

      const fileName = (data?.get('file') as File | undefined)?.name

      for (const progress of [
        0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1,
      ]) {
        onUploadProgress?.({
          loaded: total * progress,
          bytes: progress * total,
          total,
        })
        await sleep(speed)

        if ((fileName === 'error.pdf' || shouldFail) && progress > 0.5) {
          return [500, null]
        }
      }

      serverFiles.current = [
        ...(multipleFiles
          ? serverFiles.current.filter((file) => file.name !== fileName)
          : []),
        ...Array.from(data?.values() as IterableIterator<File>).map(
          (file) =>
            ({
              id: 1,
              name: file.name,
              size: file.size,
            }) satisfies CustomRemoteFile,
        ),
      ].sort((a, b) => a.name.localeCompare(b.name))

      return [200, null]
    })
    .onPost('/delete')
    .reply(async ({ data }: AxiosRequestConfig<CustomRemoteFile>) => {
      await sleep(1000)

      serverFiles.current = serverFiles.current.filter(
        (file) => file.id !== data?.id,
      )

      return [200, null]
    })

  mock
    .onGet('/download')
    .reply(
      async (config: AxiosRequestConfig): Promise<[number, Blob | null]> => {
        // Ensure that params exist and have the correct type
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (!config.params || typeof config.params.fileName !== 'string') {
          return [400, null]
        }

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { fileName } = config.params

        await sleep(1000)
        const file = serverFiles.current.find((f) => f.name === fileName)

        if (!file) {
          return [404, null]
        }

        const fileContent = new Blob([`Content of ${file.name}`], {
          type: 'text/plain',
        })

        return [200, fileContent]
      },
    )
  const [remoteFiles, setRemoteFiles] = useState<CustomRemoteFile[]>(
    serverFiles.current,
  )

  const mutateRemoteFiles = useCallback(async () => {
    await sleep(500)
    setRemoteFiles(
      JSON.parse(
        JSON.stringify(serverFiles.current),
      ) as typeof serverFiles.current,
    )
  }, [])

  return multipleFiles
    ? {
        remoteFiles,
        mutateRemoteFiles,
        axiosInstance,
      }
    : {
        remoteFile: remoteFiles[0],
        mutateRemoteFiles,
        axiosInstance,
      }
}
