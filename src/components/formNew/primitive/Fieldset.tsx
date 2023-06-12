import classNames from 'classnames'
import { Mode, ModeProps } from '../../types'
import { FormTone, FormToneProps } from '../types'
import { useFieldsetCss, useFieldsetLegendCss } from './useThemedCss'

export enum FieldSetIndent {
  none = 'none',
  labelAndChildren = 'labelAndChildren',
  label = 'label',
}

export type FieldsetProps = React.DetailedHTMLProps<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
  HTMLFieldSetElement
> &
  ModeProps &
  FormToneProps & {
    label?: string
    indent?: FieldSetIndent
  }

/**
 * A themed fieldset.
 *
 * It inherits styles from the label.
 */
export function Fieldset({
  mode = Mode.light,
  tone = FormTone.neutral,
  indent = FieldSetIndent.none,
  disabled = false,
  label,
  className,
  children,
  ...props
}: FieldsetProps) {
  const fieldsetCss = useFieldsetCss({ indent })
  const fieldsetLegendCss = useFieldsetLegendCss({
    mode,
    tone,
    disabled,
    indent,
  })

  return (
    <fieldset {...props} className={classNames(fieldsetCss, className)}>
      {!!label && <legend className={fieldsetLegendCss}>{label}</legend>}
      {children}
    </fieldset>
  )
}
