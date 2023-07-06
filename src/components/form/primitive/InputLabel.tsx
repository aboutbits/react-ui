import classNames from 'classnames'
import { Mode, ModeProps } from '../../types'
import { FormTone, FormToneProps } from '../types'
import { useInputLabelCss } from './useThemedCss'

export type InputLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  ModeProps &
  FormToneProps & {
    disabled?: boolean
    required?: boolean
  }

/**
 * A themed `label` element.
 */
export function InputLabel({
  mode = Mode.light,
  tone = FormTone.neutral,
  disabled = false,
  className,
  children,
  required = false,
  ...props
}: InputLabelProps) {
  const inputLabelCss = useInputLabelCss({ mode, tone, disabled, required })

  return (
    <label {...props} className={classNames(inputLabelCss, className)}>
      {children}
    </label>
  )
}
