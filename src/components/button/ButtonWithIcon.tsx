import React, { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import classNames from 'classnames'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { Button, ButtonProps } from './Button'

type ButtonWithIconProps = ButtonProps & {
  /**
   * Defines the icon of the button.
   */
  Icon: ComponentType<IconProps>
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ children, Icon, ...props }, ref) => {
    const { button } = useTheme()
    return (
      <Button {...props} ref={ref}>
        <div className={button.withIcon.iconContainer.base}>
          <Icon
            className={classNames(
              `fill-current ${
                props.size === 'sm' ? 'mr-1 w-4 h-4' : 'mr-2 w-6 h-6'
              }`
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
