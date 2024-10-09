import classNames from 'classnames'
import { ComponentProps, PropsWithChildren } from 'react'
import { useTheme } from '../../framework'

type FileUploadContainerProps = PropsWithChildren<ComponentProps<'div'>>

export function FileUploadContainer({
  className,
  children,
  ...props
}: FileUploadContainerProps) {
  const { files } = useTheme()
  return (
    <div className={classNames(files.container, className)} {...props}>
      {children}
    </div>
  )
}
