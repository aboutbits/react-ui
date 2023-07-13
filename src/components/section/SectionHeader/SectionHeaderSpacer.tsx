import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export enum SectionHeaderSpacerSize {
  Sm = 'SM',
  Md = 'MD',
  Lg = 'LG',
  Xl = 'XL',
}

export function SectionHeaderSpacer({
  size = SectionHeaderSpacerSize.Sm,
  className,
}: {
  size?: SectionHeaderSpacerSize
} & ClassNameProps): ReactElement {
  const { section } = useTheme()

  return (
    <div className={classNames(section.headerSpacer.size[size], className)} />
  )
}
