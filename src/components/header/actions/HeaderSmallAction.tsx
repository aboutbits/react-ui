import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps & {
  /**
   * Defines the icon of the button.
   * */
  icon: ComponentType<IconProps>
  /**
   * Sets a label for [aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php).
   * */
  label: string
  /**
   * Defines which action should be executed on clicking.
   * */
  onClick: () => void
  /**
   *
   * */
  disabled?: boolean
}

const HeaderSmallAction: React.FC<Props> = ({
  icon: Icon,
  label,
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <button
      className={classNames(
        className
          ? className
          : 'text-header-action-hover text-header-action-focus'
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
