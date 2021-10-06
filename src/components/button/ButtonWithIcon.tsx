import React, { ComponentType } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { useTheme } from '../../framework'
import { Button, ButtonProps, Size } from './Button'

type ButtonWithIconProps = ButtonProps & {
  /**
   * Defines the icon of the button.
   **/
  Icon: ComponentType<IconProps>
}

const ButtonWithIcon = React.forwardRef<HTMLButtonElement, ButtonWithIconProps>(
  ({ children, Icon, size = Size.md, ...props }, ref) => {
    const { button } = useTheme()
    return (
      <Button size={size} {...props} ref={ref}>
        <div className={button.withIcon.iconContainer.base}>
          <Icon
            className={classNames(
              button.withIcon.icon.base,
              button.withIcon.icon.size[size]
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
