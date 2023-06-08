import classNames from 'classnames'
import { ClassNameProps, Mode, ModeProps } from '../../types'
import { FormTone, FormToneProps } from '../types'
import { useInputMessageCss } from './useThemedCss'

export type InputMessageProps = ClassNameProps &
  ModeProps &
  FormToneProps & {
    disabled?: boolean
    /**
     * The content of the message.
     */
    message?: string
  }

/**
 * A themed message to be used with field components.
 */
export function InputMessage({
  mode = Mode.light,
  tone = FormTone.neutral,
  disabled = false,
  className,
  message,
}: InputMessageProps) {
  const inputMessageCss = useInputMessageCss({ mode, tone, disabled })

  return (
    <span className={classNames(inputMessageCss, className)}>{message}</span>
  )
}
