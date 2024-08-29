import IconDownload from '@aboutbits/react-material-icons/dist/IconDownload'
import { useInternationalization } from '../../framework'
import { ButtonVariant } from '../button'
import {
  ResponsiveButtonIcon,
  ResponsiveButtonIconProps,
} from '../button/ResponsiveButtonIcon'
import { Tone } from '../types'

export function DownloadFileAction({
  onClick,
}: Pick<ResponsiveButtonIconProps, 'onClick'>) {
  const { messages } = useInternationalization()
  return (
    <ResponsiveButtonIcon
      variant={ButtonVariant.Transparent}
      tone={Tone.Neutral}
      icon={IconDownload}
      onClick={onClick}
      label={messages['files.action.download']}
    />
  )
}
