import { Button, ButtonProps } from './Button'
import React, { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import classNames from 'classnames'

interface ButtonWithIconProps extends ButtonProps {
  /**
   * Defines the icon of the button.
   * */
  Icon: ComponentType<IconProps>
  className?: string
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ children, Icon, className, ...props }, ref) => {
    return (
      <Button {...props} ref={ref}>
        <div className="flex justify-center items-center">
          <Icon
            className={classNames(
              `mr-1 fill-current ${props.size === 'sm' ? 'w-3 h3' : 'w-4 h-4'}`,
              className
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
