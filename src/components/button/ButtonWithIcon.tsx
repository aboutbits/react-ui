import IconDelete from '@aboutbits/react-material-icons/dist/IconDelete'
import { Button, ButtonProps, Tone, Variant } from './Button'
import React, { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'

interface ButtonWithIconProps extends ButtonProps {
  /**
   * Defines the icon of the button. As default is a trash can icon.
   * */
  Icon?: ComponentType<IconProps>
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ children, Icon = IconDelete, ...props }, ref) => {
    return (
      <Button
        variant={Variant.transparent}
        tone={Tone.critical}
        {...props}
        ref={ref}
      >
        <div className="flex justify-center items-center">
          <Icon className="mr-1 h-4 fill-current" />
          {children}
        </div>
      </Button>
    )
  }
)

ButtonWithIcon.displayName = 'DeleteButton'

export { ButtonWithIcon }
