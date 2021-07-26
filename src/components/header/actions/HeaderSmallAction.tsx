import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'

const HeaderSmallAction: React.FC<{
  icon: ComponentType<IconProps>
  label: string
  disabled?: boolean
  onClick: () => void
  className?: string
}> = ({ icon: Icon, label, onClick, disabled = false, className }) => {
  return (
    <button
      className={classNames(
        className ? className : 'hover:text-gray-700 focus:text-gray-700'
      )}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon className="w-6 lg:w-8 h-6 lg:h-8 fill-current" title={label} />
    </button>
  )
}

export { HeaderSmallAction }
