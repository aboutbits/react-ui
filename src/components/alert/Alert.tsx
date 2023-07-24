import classNames from 'classnames'
import { ComponentType, ReactElement, ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps, IconProps, Tone } from '../types'
import { AlertActionsPosition, AlertProps } from './types'

export function Alert({
  className,
  icon,
  title,
  actions,
  tone,
  actionsPosition = AlertActionsPosition.responsive,
  children,
}: AlertProps): ReactElement {
  return (
    <AlertContainer tone={tone} className={className}>
      <AlertIcon icon={icon} />
      <AlertContent actionsPosition={actionsPosition}>
        <AlertTexts>
          <AlertTitle>{title}</AlertTitle>
          <AlertMessage>{children}</AlertMessage>
        </AlertTexts>
        <AlertActions>{actions}</AlertActions>
      </AlertContent>
    </AlertContainer>
  )
}

export function AlertContainer({
  className,
  tone,
  children,
}: {
  tone: Tone
  className?: string
  children?: ReactNode
}): ReactElement {
  const { alert } = useTheme()

  return (
    <div
      className={classNames(
        alert.container.base,
        alert.container.tone[tone],
        className,
      )}
    >
      {children}
    </div>
  )
}

export function AlertIcon({
  className,
  icon: Icon,
}: {
  icon?: ComponentType<IconProps>
} & ClassNameProps): ReactElement | null {
  const { alert } = useTheme()

  if (Icon === undefined) {
    return null
  }

  return <Icon className={classNames(alert.icon.base, className)} />
}

export function AlertContent({
  className,
  actionsPosition = AlertActionsPosition.responsive,
  children,
}: {
  className?: string
  actionsPosition?: AlertActionsPosition
  children?: ReactNode
}): ReactElement {
  const { alert } = useTheme()

  return (
    <div
      className={classNames(
        alert.content.base,
        alert.content.actionsPosition[actionsPosition],
        className,
      )}
    >
      {children}
    </div>
  )
}

export function AlertTexts({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}): ReactElement {
  const { alert } = useTheme()

  return (
    <div className={classNames(alert.texts.base, className)}>{children}</div>
  )
}

export function AlertTitle({
  className,
  children,
}: {
  className?: string
  children?: ReactNode
}): ReactElement | null {
  const { alert } = useTheme()

  if (children === undefined || children === null || children === false) {
    return null
  }

  return (
    <div className={classNames(alert.title.base, className)}>{children}</div>
  )
}

export function AlertMessage({
  className,
  children,
}: {
  children?: ReactNode
} & ClassNameProps): ReactElement | null {
  const { alert } = useTheme()

  if (children === undefined || children === null || children === false) {
    return null
  }

  return (
    <div className={classNames(alert.message.base, className)}>{children}</div>
  )
}

export function AlertActions({
  className,
  children,
}: {
  children?: ReactNode
} & ClassNameProps): ReactElement | null {
  const { alert } = useTheme()

  if (children === undefined || children === null || children === false) {
    return null
  }

  return (
    <div className={classNames(alert.actions.base, className)}>{children}</div>
  )
}
