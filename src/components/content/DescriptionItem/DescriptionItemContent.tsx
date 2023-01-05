import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DescriptionItemContentProps = ClassNameProps & {
  children?: ReactNode
}

export function DescriptionItemContent({
  children,
  className,
}: DescriptionItemContentProps) {
  const { content } = useTheme()
  return (
    <dd className={classNames(content.descriptionItemContent.base, className)}>
      {children}
    </dd>
  )
}
