import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import { ComponentType, ReactElement } from 'react'
import { useInternationalization } from '../../../framework'
import { IconProps } from '../../types'
import {
  HeaderLeftActionIcon,
  HeaderLeftActionIconProps,
} from './HeaderLeftActionIcon'

export type HeaderBackActionProps = Omit<HeaderLeftActionIconProps, 'icon'> & {
  /**
   * Defines the icon of the button.
   **/
  icon?: ComponentType<IconProps>
}

export function HeaderBackAction({
  icon = IconArrowBack,
  label,
  ...props
}: HeaderBackActionProps): ReactElement {
  const { messages } = useInternationalization()

  return (
    <HeaderLeftActionIcon
      icon={icon}
      label={label || messages['button.goBack']}
      {...props}
    />
  )
}
