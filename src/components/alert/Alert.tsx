import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import IconCheck from '@aboutbits/react-material-icons/dist/IconCheck'
import classNames from 'classnames'
import { ClassNameProps } from '../types'
import { useTheme } from '../../framework'

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

export const AlertIcon: React.FC<Props> = ({ className, tone }) => {
  const { alert } = useTheme()

  const MessageIcon = Icon[tone]

  return (
    <div
      className={classNames(
        alert.iconContainer.base,
        alert.iconContainer.tone[tone],
        className
      )}
    >
      <MessageIcon
        className={classNames(alert.icon.base, alert.icon.tone[tone])}
      />
    </div>
  )
}

export const AlertMessage: React.FC<Props> = ({
  className,
  tone,
  children,
}) => {
  const { alert } = useTheme()
  return (
    <div
      className={classNames(
        alert.message.tone[tone],
        alert.message.base,
        className
      )}
    >
      {children}
    </div>
  )
}

export const AlertContent: React.FC<ClassNameProps> = ({
  children,
  className,
}) => {
  const { alert } = useTheme()
  return (
    <div className={classNames(alert.content.base, className)}>{children}</div>
  )
}

export const AlertContainer: React.FC<Props> = ({
  className,
  tone,
  children,
}) => {
  const { alert } = useTheme()
  return (
    <div
      className={classNames(
        alert.container.base,
        alert.container.tone[tone],
        className
      )}
    >
      {children}
    </div>
  )
}

export const Alert: React.FC<Props> = ({ className, tone, children }) => {
  if (!children) {
    return null
  }

  return (
    <AlertContainer tone={tone} className={className}>
      <AlertContent>
        <AlertIcon tone={tone} />
        <AlertMessage tone={tone}>{children}</AlertMessage>
      </AlertContent>
    </AlertContainer>
  )
}
