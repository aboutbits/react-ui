import classNames from 'classnames'
import React from 'react'
import { useTheme } from '../../framework'
import { IconProps } from '../types'

export const IconSpinner: React.FC<IconProps> = ({
  title,
  currentColor,
  ...props
}) => {
  const { loading } = useTheme()
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={title}
      {...props}
    >
      {title && <title>{title}</title>}
      <circle
        cx="12"
        cy="12"
        r="9"
        strokeWidth="2"
        pathLength="100"
        fill="none"
        className={classNames(
          currentColor
            ? loading.iconSpinner.currentColor
            : loading.iconSpinner.defaultColor,
          loading.iconSpinner.base,
        )}
      />
    </svg>
  )
}
