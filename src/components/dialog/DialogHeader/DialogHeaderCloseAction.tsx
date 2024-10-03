import { IconCloseOutlinedFilled } from '@aboutbits/react-material-icons'
import { ComponentType, ReactElement } from 'react'
import { useInternationalization } from '../../../framework'
import { IconProps } from '../../types'
import {
  DialogHeaderLeftActionIcon,
  DialogHeaderLeftActionIconProps,
} from './DialogHeaderLeftActionIcon'

export type DialogHeaderCloseActionProps = Omit<
  DialogHeaderLeftActionIconProps,
  'icon'
> & {
  /**
   * Defines the icon of the button.
   **/
  icon?: ComponentType<IconProps>
}

export function DialogHeaderCloseAction({
  icon = IconCloseOutlinedFilled,
  label,
  ...props
}: DialogHeaderCloseActionProps): ReactElement {
  const { messages } = useInternationalization()

  return (
    <DialogHeaderLeftActionIcon
      icon={icon}
      label={label ?? messages['button.close']}
      {...props}
    />
  )
}
