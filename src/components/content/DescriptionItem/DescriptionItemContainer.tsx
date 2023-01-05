import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DescriptionItemContainerProps = ClassNameProps & {
  children?: ReactNode
}

export function DescriptionItemContainer({
  className,
  children,
}: DescriptionItemContainerProps) {
  const { content: contentTheme } = useTheme()

  return (
    <dl className={classNames(contentTheme.descriptionItem.base, className)}>
      {children}
    </dl>
  )
}
