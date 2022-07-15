import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

type Props = {
  children?: ReactElement
} & ClassNameProps

export function DialogSectionContent({
  className,
  children,
}: Props): ReactElement {
  const { dialog } = useTheme()
  return (
    <div className={classNames(dialog.sectionContent.base, className)}>
      {children}
    </div>
  )
}
