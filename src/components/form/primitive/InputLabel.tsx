import classNames from 'classnames'
import { Mode, ModeProps, ShowRequiredProps } from '../../types'
import { FormTone, FormToneProps } from '../types'
import { useInputLabelCss } from './useThemedCss'

export type InputLabelProps = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  ModeProps &
  FormToneProps &
  ShowRequiredProps & {
    disabled?: boolean
  }

/**
 * A themed `label` element.
 */
export function InputLabel({
  mode = Mode.Light,
  tone = FormTone.Neutral,
  disabled = false,
  className,
  children,
  showRequired = false,
  ...props
}: InputLabelProps) {
  const inputLabelCss = useInputLabelCss({
    mode,
    tone,
    disabled,
    showRequired,
  })

  return (
    <label {...props} className={classNames(inputLabelCss, className)}>
      {children}
    </label>
  )
}
