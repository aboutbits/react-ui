import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export enum DescriptionItemContentVerticalAlign {
  start = 'start',
  center = 'center',
  end = 'end',
}

export type DescriptionItemContentProps = ClassNameProps & {
  verticalAlign?: DescriptionItemContentVerticalAlign
  children?: ReactNode
}

export function DescriptionItemContent({
  verticalAlign = DescriptionItemContentVerticalAlign.start,
  children,
  className,
}: DescriptionItemContentProps) {
  const { content } = useTheme()
  return (
    <dd
      className={classNames(
        content.descriptionItemContent.base,
        content.descriptionItemContent.verticalAlign[verticalAlign],
        className
      )}
    >
      {children}
    </dd>
  )
}
