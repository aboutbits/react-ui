import classNames from 'classnames'
import { ReactElement } from 'react'

export type Props = {
  inputId: string
  className?: string
  label?: string
}

function InputLabel({
  inputId,
  className = '',
  label,
}: Props): ReactElement | null {
  return label ? (
    <label
      htmlFor={inputId}
      className={classNames(className, 'block pb-1 font-bold text-xs')}
    >
      {label}
    </label>
  ) : null
}

export { InputLabel }
