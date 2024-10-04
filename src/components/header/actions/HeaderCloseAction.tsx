import IconCloseOutlinedFilled from '@aboutbits/react-material-icons/dist/IconCloseOutlinedFilled'
import { ComponentType, ReactElement } from 'react'
import { useInternationalization } from '../../../framework'
import { IconProps } from '../../types'
import {
  HeaderLeftActionIcon,
  HeaderLeftActionIconProps,
} from './HeaderLeftActionIcon'

export type HeaderCloseActionProps = Omit<HeaderLeftActionIconProps, 'icon'> & {
  /**
   * Defines the icon of the button.
   **/
  icon?: ComponentType<IconProps>
}

export function HeaderCloseAction({
  icon = IconCloseOutlinedFilled,
  label,
  ...props
}: HeaderCloseActionProps): ReactElement {
  const { messages } = useInternationalization()

  return (
    <HeaderLeftActionIcon
      icon={icon}
      label={label ?? messages['button.close']}
      {...props}
    />
  )
}
