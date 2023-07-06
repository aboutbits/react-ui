import { forwardRef } from 'react'
import { Mode, RequiredProps } from '../types'
import { useId } from '../util/useId'
import {
  InputLabel,
  InputLabelProps,
  InputMessage,
  InputMessageProps,
  Select,
  SelectProps,
} from './primitive'
import { FormTone, FormVariant, Status, StatusProps } from './types'

export type SelectFieldProps = Omit<SelectProps, 'tone'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps &
  RequiredProps & {
    label?: InputLabelProps['children']
  }

/**
 * A select field independent of any form validation library.
 *
 * Is composed of the primitives [Select](../?path=/docs/components-form-primitive-select--default-story), [InputLabel](../?path=/docs/components-form-primitive-inputlabel--default-story) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--default-story).
 */
export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  function SelectField(
    {
      mode = Mode.light,
      variant = FormVariant.solid,
      status,
      disabled = false,
      className,
      message,
      label,
      children,
      required,
      ...props
    },
    ref
  ) {
    const tone =
      status === Status.invalid ? FormTone.critical : FormTone.neutral

    const id = useId(props.id)

    return (
      <div className={className}>
        {!!label && (
          <InputLabel
            mode={mode}
            tone={tone}
            disabled={disabled}
            htmlFor={id}
            required={required}
          >
            {label}
          </InputLabel>
        )}
        <Select
          {...props}
          ref={ref}
          id={id}
          mode={mode}
          variant={variant}
          tone={tone}
          disabled={disabled}
          required={required}
        >
          {children}
        </Select>
        {!!message && (
          <InputMessage
            mode={mode}
            tone={tone}
            disabled={disabled}
            message={message}
          />
        )}
      </div>
    )
  }
)
