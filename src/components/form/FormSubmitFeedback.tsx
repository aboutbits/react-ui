import IconCheckCircle from '@aboutbits/react-material-icons/dist/IconCheckCircle'
import classNames from 'classnames'
import { ComponentType, ReactElement, ReactNode } from 'react'
import { useInternationalization, useTheme } from '../../framework'
import { IconProps } from '../types'
import { useFormSubmitState } from './useFormSubmitState'

export type FormSubmitFeedbackProps = {
  savedMessage?: ReactNode
  icon?: ComponentType<IconProps> | null
  successDelay?: number
  className?: string
}

export function FormSubmitFeedback({
  savedMessage,
  icon: Icon = IconCheckCircle,
  successDelay,
  className,
}: FormSubmitFeedbackProps): ReactElement | null {
  const { form } = useTheme()
  const { messages } = useInternationalization()
  const { isSubmitted } = useFormSubmitState(successDelay)

  return isSubmitted ? (
    <div className={classNames(form.formSubmitFeedback.base, className)}>
      {Icon ? <Icon className={form.formSubmitFeedback.icon.base} /> : null}
      <span>{savedMessage ?? messages['form.saved']}</span>
    </div>
  ) : null
}
