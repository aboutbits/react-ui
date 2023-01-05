import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DescriptionItemTitleProps = ClassNameProps & {
  children?: ReactNode
}

export function DescriptionItemTitle({
  children,
  className,
}: DescriptionItemTitleProps) {
  const { content } = useTheme()
  return (
    <dt className={classNames(content.descriptionItemTitle.base, className)}>
      {children}
    </dt>
  )
}
