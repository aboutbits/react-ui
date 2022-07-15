import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = { children?: ReactNode } & ClassNameProps

export function SectionContentTitle({ children, className }: Props) {
  const { section } = useTheme()

  return (
    <div className={classNames(section.contentTitle.base, className)}>
      {children}
    </div>
  )
}
