import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export enum SectionHeaderSpacerSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
}

export function SectionHeaderSpacer({
  size = SectionHeaderSpacerSize.sm,
  className,
}: {
  size?: SectionHeaderSpacerSize
} & ClassNameProps): ReactElement {
  const { section } = useTheme()

  return (
    <div className={classNames(section.headerSpacer.size[size], className)} />
  )
}
