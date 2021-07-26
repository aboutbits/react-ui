import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'

const HeaderLargeAction: React.FC<{
  icon: ComponentType<IconProps>
  label: string
  onClick: () => void
  className?: string
}> = ({ icon: Icon, label, onClick, className }) => {
  return (
    <button
      className={classNames(
        className,
        'hover:text-gray-700 focus:text-gray-700'
      )}
      aria-label={label}
      onClick={onClick}
    >
      <Icon className="w-8 lg:w-10 h-8 lg:h-10 fill-current" />
    </button>
  )
}

export { HeaderLargeAction }
