import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
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
  icon = IconClose,
  label,
  ...props
}: HeaderCloseActionProps): ReactElement {
  const { formatMessage } = useInternationalization()

  return (
    <HeaderLeftActionIcon
      icon={icon}
      label={label || formatMessage('button.close')}
      {...props}
    />
  )
}
