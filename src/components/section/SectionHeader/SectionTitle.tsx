import React from 'react'
import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export const SectionTitle: React.FC<ClassNameProps> = ({
  children,
  className,
}) => {
  const { section } = useTheme()

  return (
    <h2 className={classNames(section.title.base, className)}>{children}</h2>
  )
}
