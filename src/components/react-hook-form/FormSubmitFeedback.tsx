import IconCheckCircleOutlinedFilled from '@aboutbits/react-material-icons/dist/IconCheckCircleOutlinedFilled'
import classNames from 'classnames'
import { ComponentType, ReactElement, ReactNode } from 'react'
import { useInternationalization, useTheme } from '../../framework'
import { IconProps } from '../types'
import { useDelayedFormSubmitState } from './util/useDelayedFormSubmitState'

export type FormSubmitFeedbackProps = {
  savedMessage?: ReactNode
  icon?: ComponentType<IconProps> | null
  successDelay?: number
  className?: string
}

export function FormSubmitFeedback({
  savedMessage,
  icon: Icon = IconCheckCircleOutlinedFilled,
  successDelay,
  className,
}: FormSubmitFeedbackProps): ReactElement | null {
  const { form } = useTheme()
  const { messages } = useInternationalization()
  const { isSubmitSuccessful } = useDelayedFormSubmitState(successDelay)

  return isSubmitSuccessful ? (
    <div className={classNames(form.formSubmitFeedback.base, className)}>
      {Icon ? <Icon className={form.formSubmitFeedback.icon.base} /> : null}
      <span>{savedMessage ?? messages['form.saved']}</span>
    </div>
  ) : null
}
