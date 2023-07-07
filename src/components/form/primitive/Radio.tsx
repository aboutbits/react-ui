import classNames from 'classnames'
import { forwardRef, ReactNode } from 'react'
import { Mode, ModeProps, Size } from '../../types'
import { useRadioCss, useRadioInputCss, useRadioLabelCss } from './useThemedCss'

export enum RadioLayout {
  start = 'START',
  end = 'END',
  spaceBetween = 'SPACE_BETWEEN',
}

export type RadioProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'size' | 'placeholder'
> &
  ModeProps & {
    label?: ReactNode
    layout?: RadioLayout
    size?: Size
    applyInputHeight?: boolean
  }

/**
 * A themed radio input that can be used in controlled or uncontrolled mode.
 *
 * It inherits styles from the primitive [InputLabel](../?path=/docs/components-form-primitive-inputlabel--default-story).
 */
export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
  {
    mode = Mode.light,
    layout = RadioLayout.start,
    size = Size.md,
    applyInputHeight = false,
    disabled = false,
    label,
    className,
    ...props
  },
  ref
) {
  const radioCss = useRadioCss({
    layout,
    disabled,
    applyInputHeight,
    size,
  })
  const radioLabelCss = useRadioLabelCss({ mode, size, disabled })
  const radioInputCss = useRadioInputCss({ size })

  return (
    <label className={classNames(radioCss, className)}>
      <input
        {...props}
        ref={ref}
        type="radio"
        disabled={disabled}
        className={radioInputCss}
      />
      {label && <span className={radioLabelCss}>{label}</span>}
    </label>
  )
})
