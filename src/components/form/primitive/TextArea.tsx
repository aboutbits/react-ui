import classNames from 'classnames'
import { forwardRef } from 'react'
import { Mode, ModeProps } from '../../types'
import {
  FormTone,
  FormToneProps,
  FormVariant,
  FormVariantProps,
} from '../types'
import { useTextAreaCss } from './useThemedCss'

export type TextAreaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> &
  ModeProps &
  FormToneProps &
  FormVariantProps

/**
 * A themed `textarea` element.
 *
 * It inherits styles from the primitive [Input](../?path=/docs/components-form-primitive-input--default-story).
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      mode = Mode.light,
      variant = FormVariant.solid,
      tone = FormTone.neutral,
      disabled = false,
      className,
      ...props
    },
    ref
  ) {
    const textAreaCss = useTextAreaCss({ mode, variant, tone, disabled })

    return (
      <textarea
        {...props}
        ref={ref}
        disabled={disabled}
        className={classNames(textAreaCss, className)}
      />
    )
  }
)
