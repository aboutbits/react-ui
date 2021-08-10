import React, { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import classNames from 'classnames'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

export type MenuLinkButtonProps = {
  /**
   * Defines the text for the button.
   * */
  text: string
  /**
   * Defines the icon for the button.
   * */
  icon: ComponentType<IconProps>
} & ClassNameProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

const NavigationItemButton: React.FC<MenuLinkButtonProps> = ({
  text,
  icon: Icon,
  className,
  ...props
}) => {
  const { menu } = useTheme()

  return (
    <button
      {...props}
      className={classNames(className, menu.button.base, menu.button.normal)}
    >
      <Icon className={menu.button.icon.base} />
      <div className={menu.button.text.base}>{text}</div>
    </button>
  )
}

export { NavigationItemButton }
