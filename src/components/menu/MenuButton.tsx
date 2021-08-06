import React, { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'

export type MenuLinkButtonProps = {
  text: string
  icon: ComponentType<IconProps>
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const MenuButton: React.FC<MenuLinkButtonProps> = ({
  text,
  icon: Icon,
  ...props
}) => (
  <button
    {...props}
    className="flex flex-row items-center py-3 lg:py-4 px-4 lg:px-5 text-gray-700 hover:bg-gray-100 focus:bg-primary-50 outline-none"
  >
    <Icon className="mr-4 w-6 h-6 fill-current" />
    <div className="flex-1 text-left">{text}</div>
  </button>
)

export { MenuButton }
