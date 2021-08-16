import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { useTheme } from '../../../framework/theme/ThemeContext'
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
}

const HeaderLargeAction: React.FC<Props> = ({
  icon: Icon,
  label,
  onClick,
  className,
}) => {
  const { header } = useTheme()
  return (
    <button
      className={classNames(className, header.largeAction.normal)}
      aria-label={label}
      onClick={onClick}
    >
      <Icon className={header.largeAction.icon.base} />
    </button>
  )
}

export { HeaderLargeAction }
