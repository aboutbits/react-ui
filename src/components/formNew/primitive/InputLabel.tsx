import classNames from 'classnames'
import { ClassNameProps, Mode, ModeProps } from '../../types'
import { FormTone, FormToneProps } from '../types'
import { useInputLabelCss } from './useThemedCss'

export type InputLabelProps = ClassNameProps &
  ModeProps &
  FormToneProps & {
    disabled?: boolean
    htmlFor: string
    label?: string
  }

/**
 * A themed `label` element.
 */
export function InputLabel({
  mode = Mode.light,
  tone = FormTone.neutral,
  disabled = false,
  className,
  htmlFor,
  label,
}: InputLabelProps) {
  const inputLabelCss = useInputLabelCss({ mode, tone, disabled })

  return (
    <label htmlFor={htmlFor} className={classNames(inputLabelCss, className)}>
      {label}
    </label>
  )
}
