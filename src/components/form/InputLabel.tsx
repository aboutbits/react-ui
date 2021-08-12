import { ClassNameProps } from '../types'

export type Props = ClassNameProps & {
  /**
   * Defines the htmlFor of the label.
   * */
  inputId: string
  /**
   * Defines the body of the label.
   * */
  label?: string
}

const InputLabel: React.FC<Props> = ({ label, inputId, className }) => {
  return label ? (
    <label htmlFor={inputId} className={className}>
      {label}
    </label>
  ) : null
}

export { InputLabel }
