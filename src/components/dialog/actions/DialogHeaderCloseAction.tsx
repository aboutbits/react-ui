import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { ComponentType, ReactElement } from 'react'
import { useInternationalization } from '../../../framework'
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
  icon = IconClose,
  label,
  ...props
}: DialogHeaderCloseActionProps): ReactElement {
  const internationalization = useInternationalization()

  return (
    <DialogHeaderLeftActionIcon
      icon={icon}
      label={label || internationalization.translate('shared.button.close')}
      {...props}
    />
  )
}
