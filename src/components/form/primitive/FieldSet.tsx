import classNames from 'classnames'
import { ReactNode } from 'react'
import { Mode, ModeProps, ShowRequiredProps } from '../../types'
import { FormTone, FormToneProps } from '../types'
import { useFieldSetCss, useFieldSetLegendCss } from './useThemedCss'

export enum FieldSetIndent {
  None = 'NONE',
  LabelAndChildren = 'LABEL_AND_CHILDREN',
  Label = 'LABEL',
}

export type FieldSetProps = React.DetailedHTMLProps<
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
  HTMLFieldSetElement
> &
  ModeProps &
  FormToneProps &
  ShowRequiredProps & {
    label?: ReactNode
    indent?: FieldSetIndent
  }

/**
 * A themed fieldset.
 *
 * It inherits styles from the [InputLabel](../?path=/docs/components-form-primitive-inputlabel--default-story).
 *
 * The `indent` property can be used to control the indentation of the component (which may depend on its position and the components it contains).
 */
export function FieldSet({
  mode = Mode.Light,
  tone = FormTone.Neutral,
  indent = FieldSetIndent.None,
  disabled = false,
  label,
  className,
  children,
  showRequired,
  ...props
}: FieldSetProps) {
  const fieldsetCss = useFieldSetCss({ indent })
  const fieldsetLegendCss = useFieldSetLegendCss({
    mode,
    tone,
    disabled,
    indent,
    showRequired,
  })

  return (
    <fieldset {...props} className={classNames(fieldsetCss, className)}>
      {Boolean(label) && <legend className={fieldsetLegendCss}>{label}</legend>}
      {children}
    </fieldset>
  )
}
