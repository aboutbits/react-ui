import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps & {
  /**
   * Defines the icon of the button.
   **/
  icon: ComponentType<IconProps>
  /**
   * Sets a label for [aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php).
   **/
  label: string
  /**
   * Defines which action should be executed on clicking.
   **/
  onClick: () => void
  /**
   * Defines the disable status of the input.
   **/
  disabled?: boolean
}

const HeaderSmallAction: React.FC<Props> = ({
  icon: Icon,
  label,
  onClick,
  disabled = false,
  className,
}) => {
  const { header } = useTheme()
  return (
    <button
      className={classNames(className, header.smallAction.base)}
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
    >
      <Icon className={header.smallAction.icon.base} title={label} />
    </button>
  )
}

export { HeaderSmallAction }
