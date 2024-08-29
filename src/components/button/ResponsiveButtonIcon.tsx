import classNames from 'classnames'
import { ComponentType, ReactNode } from 'react'
import { useTheme } from '../../framework'
import { IconProps } from '../types'
import { Button, ButtonProps } from './Button'
import { ButtonIcon, ButtonIconProps } from './ButtonIcon'

export type ResponsiveButtonIconProps = Omit<
  ButtonProps & ButtonIconProps,
  'ref' | 'children' | 'icon' | 'iconStart' | 'iconEnd' | 'label'
> & {
  label: ReactNode
} & (
    | {
        icon: ComponentType<IconProps>
        iconEnd?: never
      }
    | {
        icon?: never
        iconEnd: ComponentType<IconProps>
      }
  )

export function ResponsiveButtonIcon({
  label,
  className,
  icon,
  iconEnd,
  ...props
}: ResponsiveButtonIconProps) {
  const { button } = useTheme()
  return (
    <>
      <Button
        {...props}
        iconStart={icon}
        iconEnd={iconEnd}
        className={classNames(button.buttonIconResponsive.button, className)}
      >
        {label}
      </Button>
      <ButtonIcon
        {...props}
        icon={icon ?? iconEnd}
        className={classNames(
          button.buttonIconResponsive.buttonIcon,
          className,
        )}
      />
    </>
  )
}
