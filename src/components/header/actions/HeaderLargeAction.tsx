import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'

type Props = {
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
  /** TODO: import from types after merge
   *
   * */
  className?: string
}

const HeaderLargeAction: React.FC<Props> = ({
  icon: Icon,
  label,
  onClick,
  className,
}) => {
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
