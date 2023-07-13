import classNames from 'classnames'
import { ReactNode } from 'react'
import { Mode, ModeProps, ShowRequiredProps } from '../../types'
import { FormTone, FormToneProps } from '../types'
import { useFieldsetCss, useFieldsetLegendCss } from './useThemedCss'

export enum FieldSetIndent {
  None = 'NONE',
  LabelAndChildren = 'LABEL_AND_CHILDREN',
  Label = 'LABEL',
}

export type FieldsetProps = React.DetailedHTMLProps<
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
export function Fieldset({
  mode = Mode.Light,
  tone = FormTone.Neutral,
  indent = FieldSetIndent.None,
  disabled = false,
  label,
  className,
  children,
  showRequired,
  ...props
}: FieldsetProps) {
  const fieldsetCss = useFieldsetCss({ indent })
  const fieldsetLegendCss = useFieldsetLegendCss({
    mode,
    tone,
    disabled,
    indent,
    showRequired,
  })

  return (
    <fieldset {...props} className={classNames(fieldsetCss, className)}>
      {!!label && <legend className={fieldsetLegendCss}>{label}</legend>}
      {children}
    </fieldset>
  )
}
