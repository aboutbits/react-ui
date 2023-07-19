import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import { ComponentType, ReactElement } from 'react'
import { useInternationalization, useRouter } from '../../../framework'
import { IconProps } from '../../types'
import {
  HeaderLeftActionIcon,
  HeaderLeftActionIconProps,
} from './HeaderLeftActionIcon'

export type HeaderBackActionProps = Omit<
  HeaderLeftActionIconProps,
  'icon' | 'onClick'
> &
  Partial<Pick<HeaderLeftActionIconProps, 'onClick'>> & {
    /**
     * Defines the icon of the button.
     **/
    icon?: ComponentType<IconProps>
    /**
     * Defines the url to navigate to if it's not possible to go back in browser history
     */
    fallbackUrl?: string
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

  const goBack = () => {
    const canGoBack =
      window &&
      'navigation' in window &&
      typeof window.navigation === 'object' &&
      window.navigation !== null &&
      'canGoBack' in window.navigation &&
      typeof window.navigation.canGoBack === 'boolean'
        ? window.navigation.canGoBack
        : window.history.length > 1

    if (canGoBack || !fallbackUrl) {
      window.history.back()
    } else {
      router.push(fallbackUrl)
    }
  }

  return (
    <HeaderLeftActionIcon
      icon={icon}
      label={label || messages['button.goBack']}
      onClick={onClick ?? goBack}
      {...props}
    />
  )
}
