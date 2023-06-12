import { forwardRef } from 'react'
import { useId } from '@headlessui/react/dist/hooks/use-id'
import { Mode } from '../types'
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
  Pick<InputLabelProps, 'label'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps

/**
 * A select field independent of any form validation library.
 *
 * Is composed of the primitives [Select](../?path=/docs/components-formnew-primitive-select--default-story), [InputLabel](../?path=/docs/components-formnew-primitive-inputlabel--default-story) and [InputMessage](../?path=/docs/components-formnew-primitive-inputmessage--default-story).
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
      ...props
    },
    ref
  ) {
    const tone =
      status === Status.invalid ? FormTone.critical : FormTone.neutral

    const autoId = useId()
    const id = props.id ?? autoId

    return (
      <div className={className}>
        {!!label && (
          <InputLabel
            mode={mode}
            tone={tone}
            disabled={disabled}
            htmlFor={id}
            label={label}
          />
        )}
        <Select
          {...props}
          ref={ref}
          id={id}
          mode={mode}
          variant={variant}
          tone={tone}
          disabled={disabled}
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
