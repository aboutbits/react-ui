import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = { children?: ReactNode } & ClassNameProps

export function SectionContainer({ children, className }: Props): ReactElement {
  const { section } = useTheme()
  return (
    <div className={classNames(section.container.base, className)}>
      {children}
    </div>
  )
}
