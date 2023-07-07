import classNames from 'classnames'
import { Mode, ModeProps, RequiredProps, ShowRequiredProps } from '../../types'
import { FormTone, FormToneProps } from '../types'
import { useInputLabelCss } from './useThemedCss'

export type InputLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  ModeProps &
  FormToneProps &
  RequiredProps &
  ShowRequiredProps & {
    disabled?: boolean
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
  ...props
}: InputLabelProps) {
  const inputLabelCss = useInputLabelCss({
    mode,
    tone,
    disabled,
    required: props.required && props.showRequired,
  })

  return (
    <label {...props} className={classNames(inputLabelCss, className)}>
      {children}
    </label>
  )
}
