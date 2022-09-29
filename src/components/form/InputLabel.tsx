import { ClassNameProps } from '../types'

export type InputLabelProps = ClassNameProps & {
  /**
   * Defines the htmlFor of the label.
   **/
  inputId: string
  /**
   * Defines the body of the label.
   **/
  label?: string
}

export function InputLabel({ label, inputId, className }: InputLabelProps) {
  return label ? (
    <label htmlFor={inputId} className={className}>
      {label}
    </label>
  ) : null
}
