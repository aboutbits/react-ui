import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import { ComponentProps, ComponentType, ReactElement } from 'react'
import { useInternationalization, useRouter } from '../../../framework'
import { IconProps } from '../../types'
import {
  HeaderLeftActionIcon,
  HeaderLeftActionIconProps,
} from './HeaderLeftActionIcon'

export type HeaderBackActionProps = Omit<
  HeaderLeftActionIconProps,
  'icon' | 'onClick'
> & {
  /**
   * Defines the icon of the button.
   **/
  icon?: ComponentType<IconProps>
} & HeaderBackActionOnClickOrFallbackUrlProps

export type HeaderBackActionOnClickOrFallbackUrlProps =
  | {
      /**
       * Defines the url to navigate to if it's not possible to go back in browser history
       */
      fallbackUrl: string
      onClick?: never
    }
  | {
      /**
       * The optional onClick handler. If not provided, the default action is to go back in browser history (if possible) or navigate to the fallback url.
       */
      onClick: HeaderLeftActionIconProps['onClick']
      fallbackUrl?: never
    }

export function HeaderBackAction({
  icon = IconArrowBack,
  label,
  onClick,
  fallbackUrl,
  ...props
}: HeaderBackActionProps): ReactElement {
  const router = useRouter()
  const { messages } = useInternationalization()

  const goBack: ComponentProps<typeof HeaderLeftActionIcon>['onClick'] = (
    event,
  ) => {
    if (onClick) {
      onClick(event)
      return
    }

    const canGoBack =
      typeof window !== 'undefined' &&
      'navigation' in window &&
      typeof window.navigation === 'object' &&
      window.navigation !== null &&
      'canGoBack' in window.navigation &&
      typeof window.navigation.canGoBack === 'boolean'
        ? window.navigation.canGoBack
        : window.history.length > 1

    if (canGoBack) {
      router.back()
    } else {
      router.replace(fallbackUrl)
    }
  }

  return (
    <HeaderLeftActionIcon
      icon={icon}
      label={label ?? messages['button.goBack']}
      onClick={goBack}
      {...props}
    />
  )
}
