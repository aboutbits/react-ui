import React, { ComponentType, ReactNode } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import classNames from 'classnames'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export type MenuLinkButtonProps = {
  /**
   * Defines the text for the button.
   **/
  content: ReactNode
  /**
   * Defines the icon for the button.
   **/
  icon: ComponentType<IconProps>
} & ClassNameProps &
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >

const NavigationItemButton: React.FC<MenuLinkButtonProps> = ({
  content,
  icon: Icon,
  className,
  ...props
}) => {
  const { navigation } = useTheme()

  return (
    <button
      {...props}
      className={classNames(
        className,
        navigation.item.base,
        props.disabled ? navigation.item.disabled : navigation.item.normal
      )}
    >
      <Icon className={navigation.item.icon.base} />
      <div className={navigation.item.content.base}>{content}</div>
    </button>
  )
}

export { NavigationItemButton }
