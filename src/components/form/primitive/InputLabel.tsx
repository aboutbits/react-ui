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
    showRequired?: boolean
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
