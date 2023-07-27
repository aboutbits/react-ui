import { forwardRef } from 'react'
import { HideRequiredProps, Mode, RequiredProps } from '../types'
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
  RequiredProps &
  HideRequiredProps & {
    label?: InputLabelProps['children']
  }

/**
 * A select field independent of any form validation library.
 *
 * It is composed of the primitives [Select](../?path=/docs/components-form-primitive-select--default-story), [InputLabel](../?path=/docs/components-form-primitive-inputlabel--default-story) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--default-story).
 */
export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  function SelectField(
    {
      mode = Mode.Light,
      variant = FormVariant.Solid,
      status,
      disabled = false,
      className,
      message,
      label,
      children,
      required,
      hideRequired,
      ...props
    },
    ref,
  ) {
    const tone =
      status === Status.Invalid ? FormTone.Critical : FormTone.Neutral

    const id = useId(props.id)

    return (
      <div className={className}>
        {Boolean(label) && (
          <InputLabel
            mode={mode}
            tone={tone}
            disabled={disabled}
            showRequired={required && !hideRequired}
            htmlFor={id}
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
        {Boolean(message) && (
          <InputMessage
            mode={mode}
            tone={tone}
            disabled={disabled}
            message={message}
          />
        )}
      </div>
    )
  },
)
