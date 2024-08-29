import { PropsWithChildren } from 'react'
import { useTheme } from '../../framework'

export type FileListProps = PropsWithChildren

export function FileList({ children }: FileListProps) {
  const { files } = useTheme()
  return <div className={files.fileList.container}>{children}</div>
}
