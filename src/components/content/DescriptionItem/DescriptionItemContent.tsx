import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'
import { DescriptionItemContentAlignVertical } from './types'

export type DescriptionItemContentProps = ClassNameProps & {
  alignVertical?: DescriptionItemContentAlignVertical
  children?: ReactNode
}

export function DescriptionItemContent({
  alignVertical = DescriptionItemContentAlignVertical.Start,
  children,
  className,
}: DescriptionItemContentProps) {
  const { content } = useTheme()
  return (
    <dd
      className={classNames(
        content.descriptionItemContent.base,
        content.descriptionItemContent.alignVertical[alignVertical],
        className,
      )}
    >
      {children}
    </dd>
  )
}
