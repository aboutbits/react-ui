import IconDownload from '@aboutbits/react-material-icons/dist/IconDownloadRounded'
import { useState } from 'react'
import { useInternationalization } from '../../framework'
import { ButtonVariant } from '../button'
import { LoadingSpinner } from '../loading/LoadingSpinner'
import { Tone } from '../types'
import { FileUploadObject } from './FileUploadState'
import { ResponsiveButtonIcon } from './ResponsiveButtonIcon'

type DownloadFileActionProps<TRemoteFile> = {
  fileUploadObject: FileUploadObject<TRemoteFile>
  onDownload: (
    fileUploadObject: FileUploadObject<TRemoteFile>,
  ) => void | Promise<void>
}

export function DownloadFileAction<TRemoteFile>({
  onDownload,
  fileUploadObject,
}: DownloadFileActionProps<TRemoteFile>) {
  const { messages } = useInternationalization()
  const [isDownloading, setIsDownloading] = useState(false)
  return (
    <ResponsiveButtonIcon
      variant={ButtonVariant.Transparent}
      tone={Tone.Neutral}
      disabled={isDownloading}
      icon={isDownloading ? LoadingSpinner : IconDownload}
      onClick={() => {
        setIsDownloading(true)
        Promise.resolve(onDownload(fileUploadObject))
          .then(() => {
            setIsDownloading(false)
          })
          .catch(() => {
            setIsDownloading(false)
          })
      }}
      label={messages['files.action.download']}
    />
  )
}
