import classNames from 'classnames'
import { ComponentType } from 'react'
import { useTheme } from '../../framework'
import { Button, ButtonProps } from '../button/Button'
import { ButtonIcon, ButtonIconProps } from '../button/ButtonIcon'
import { IconProps } from '../types'

export type ResponsiveButtonIconProps = Omit<
  ButtonProps & ButtonIconProps,
  'ref' | 'children' | 'icon' | 'iconStart' | 'iconEnd' | 'label'
> & {
  label: string
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
  const { files } = useTheme()
  return (
    <>
      <Button
        {...props}
        iconStart={icon}
        iconEnd={iconEnd}
        className={classNames(
          files.action.buttonIconResponsive.button,
          className,
        )}
      >
        {label}
      </Button>
      <ButtonIcon
        {...props}
        icon={icon ?? iconEnd}
        aria-label={label}
        className={classNames(
          files.action.buttonIconResponsive.buttonIcon,
          className,
        )}
      />
    </>
  )
}
