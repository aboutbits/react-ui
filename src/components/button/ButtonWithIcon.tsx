import { Button, ButtonProps, Size, Variant, Tone } from './Button'
import React, { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import classNames from 'classnames'

type ButtonWithIconProps = ButtonProps & {
  /**
   * Defines the icon of the button.
   */
  Icon: ComponentType<IconProps>
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  (
    {
      children,
      Icon,
      size = Size.md,
      variant = Variant.solid,
      tone = Tone.primary,
      ...props
    },
    ref
  ) => {
    return (
      <Button size={size} tone={tone} variant={variant} {...props} ref={ref}>
        <div className="flex justify-center items-center">
          <Icon
            className={classNames(
              `mr-1 fill-current ${size === 'sm' ? 'w-3 h3' : 'w-4 h-4'}`
            )}
          />
          {children}
        </div>
      </Button>
    )
  }
)

ButtonWithIcon.displayName = 'ButtonWithIcon'

export { ButtonWithIcon }
