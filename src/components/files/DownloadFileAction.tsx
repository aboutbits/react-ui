import IconDownload from '@aboutbits/react-material-icons/dist/IconDownload'
import { useState } from 'react'
import { useInternationalization } from '../../framework'
import { ButtonVariant } from '../button'
import { IconSpinner } from '../loading/IconSpinner'
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
      icon={isDownloading ? IconSpinner : IconDownload}
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
