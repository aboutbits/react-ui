import React from 'react'
import classNames from 'classnames'
import { useTheme } from '../../../framework'

export const SectionTitle: React.FC = ({ children }) => {
  const { section } = useTheme()

  return <h2 className={classNames(section.title.base)}>{children}</h2>
}
