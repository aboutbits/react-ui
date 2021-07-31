import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import IconCheck from '@aboutbits/react-material-icons/dist/IconCheck'
import classNames from 'classnames'
import { ClassNameProps } from '../types'
import { useTheme } from '../../theme/ThemeProvider'

export enum Tone {
  critical = 'critical',
  positive = 'positive',
}

export type Props = ClassNameProps & {
  tone: Tone
}

const Icon: Record<Tone, ComponentType<IconProps>> = {
  [Tone.critical]: IconWarning,
  [Tone.positive]: IconCheck,
}

export const Alert: React.FC<Props> = ({ className, tone, children }) => {
  const { alert } = useTheme()

  if (!children) {
    return null
  }

  const MessageIcon = Icon[tone]

  return (
    <div
      className={classNames(
        alert.container.base,
        alert.container.tone[tone],
        className
      )}
    >
      <div className={alert.content.base}>
        <div
          className={classNames(
            alert.iconContainer.base,
            alert.iconContainer.tone[tone]
          )}
        >
          <MessageIcon
            className={classNames(alert.icon.base, alert.icon.tone[tone])}
          />
        </div>
        <div
          className={classNames(alert.message.tone[tone], alert.message.base)}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
