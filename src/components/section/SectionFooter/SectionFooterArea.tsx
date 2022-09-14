import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionFooterAreaProps = ClassNameProps & { children?: ReactNode }

export function SectionFooterArea({
  className,
  children,
}: SectionFooterAreaProps) {
  const { section } = useTheme()

  return (
    <div className={classNames(className, section.footerArea.base)}>
      {children}
    </div>
  )
}
