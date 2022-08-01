import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = { children?: ReactNode } & ClassNameProps

export function SubsectionTitle({ children, className }: Props) {
  const { section } = useTheme()

  return (
    <h3 className={classNames(section.subsectionTitle.base, className)}>
      {children}
    </h3>
  )
}
