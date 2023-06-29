import classNames from 'classnames'
import { ClassNameProps, Mode, ModeProps } from '../../types'
import { FormTone, FormToneProps } from '../types'
import { useInputMessageCss } from './useThemedCss'

export type InputMessageProps = ClassNameProps &
  ModeProps &
  FormToneProps & {
    disabled?: boolean
    noIndent?: boolean
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
  noIndent = false,
  disabled = false,
  className,
  message,
}: InputMessageProps) {
  const inputMessageCss = useInputMessageCss({ mode, tone, disabled, noIndent })

  return (
    <span className={classNames(inputMessageCss, className)}>{message}</span>
  )
}
