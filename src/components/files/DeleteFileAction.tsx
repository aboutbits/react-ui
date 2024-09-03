import IconDelete from '@aboutbits/react-material-icons/dist/IconDeleteRoundedFilled'
import { useState } from 'react'
import { useInternationalization } from '../../framework'
import { ButtonVariant } from '../button'
import { IconSpinner } from '../loading/IconSpinner'
import { Tone } from '../types'
import { FileUploadObject } from './FileUploadState'
import { ResponsiveButtonIcon } from './ResponsiveButtonIcon'

type DeleteFileActionProps<TRemoteFile> = {
  fileUploadObject: FileUploadObject<TRemoteFile>
  onDelete: (
    fileUploadObject: FileUploadObject<TRemoteFile>,
  ) => void | Promise<void>
}

export function DeleteFileAction<TRemoteFile>({
  fileUploadObject,
  onDelete,
}: DeleteFileActionProps<TRemoteFile>) {
  const [isDeleting, setIsDeleting] = useState(false)
  const { messages } = useInternationalization()
  return (
    <ResponsiveButtonIcon
      variant={ButtonVariant.Transparent}
      tone={Tone.Neutral}
      disabled={isDeleting}
      onClick={() => {
        setIsDeleting(true)
        Promise.resolve(onDelete(fileUploadObject))
          .then(() => {
            setIsDeleting(false)
          })
          .catch(() => {
            setIsDeleting(false)
          })
      }}
      icon={isDeleting ? IconSpinner : IconDelete}
      label={messages['files.action.delete']}
    />
  )
}
