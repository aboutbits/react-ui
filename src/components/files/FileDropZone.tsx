import IconUploadFile from '@aboutbits/react-material-icons/dist/IconUploadFile'
import classNames from 'classnames'
import { ChangeEventHandler, useRef } from 'react'
import { useInternationalization, useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { useFileDropZone } from './useFileDropZone'
import { useHumanReadableFileSize } from './utils'

export type FileDropZoneProps = {
  fileTypes?: string[]
  disabled?: boolean
  maxFileSize?: number
  className?: string
} & (
  | { multipleFiles?: false; onSelect?: (file: File) => void }
  | { multipleFiles: true; onSelect?: (files: File[]) => void }
) &
  ClassNameProps

export function FileDropZone({
  fileTypes,
  multipleFiles,
  disabled = false,
  onSelect,
  maxFileSize,
  className,
}: FileDropZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFilesChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    if (!inputRef.current) {
      throw new Error('FileUpload: No input element specified!')
    }

    const files = Array.from(target.files ?? [])

    if (multipleFiles) {
      onSelect?.(files)
    } else if (files[0]) {
      onSelect?.(files[0])
    }

    target.value = ''
  }

  const { files } = useTheme()

  const { messages } = useInternationalization()

  const formatFileSize = useHumanReadableFileSize()

  const { dropZoneRef, isFileHovering } = useFileDropZone<HTMLButtonElement>({
    disabled,
    inputRef,
  })

  return (
    <div className={files.fileDropzone.container.base}>
      <input
        type="file"
        ref={inputRef}
        multiple={multipleFiles}
        accept={fileTypes?.map((fileType) => `.${fileType}`).join(',')}
        onChange={handleFilesChange}
        disabled={disabled}
        hidden
      />
      <button
        ref={dropZoneRef}
        type="button"
        onClick={() => inputRef.current?.click()}
        className={classNames(
          files.fileDropzone.uploadButton.base,
          isFileHovering && files.fileDropzone.uploadButton.fileHovering,
          className,
        )}
      >
        <div
          className={classNames(
            files.icon.container.base,
            files.icon.container.default,
          )}
        >
          <IconUploadFile
            className={classNames(files.icon.size, files.icon.default)}
          />
        </div>
        <div className={files.text.base}>
          <div>
            <span className={files.text.underline}>
              {messages['files.dropzone.description.part1.text']}
            </span>
            {messages['files.dropzone.description.part2.text']}
          </div>
          <div className={files.text.info}>
            {fileTypes && fileTypes.length > 0 && (
              <>
                {messages['files.dropzone.allowedFileTypes.text']}{' '}
                {fileTypes.join(', ')}{' '}
              </>
            )}
            {maxFileSize && (
              <>
                ({messages['files.dropzone.maxFileSize.text']}{' '}
                {formatFileSize(maxFileSize)})
              </>
            )}
          </div>
        </div>
      </button>
    </div>
  )
}
