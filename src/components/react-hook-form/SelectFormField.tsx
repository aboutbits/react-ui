import {
  Children,
  ComponentProps,
  ForwardedRef,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
} from 'react'
import {
  FieldPath,
  FieldValues,
  RegisterOptions,
  useFormContext,
  useWatch,
} from 'react-hook-form'
import { Option, SelectField, SelectFieldProps, Status } from '../form'
import { useForwardedRef } from '../util/useForwardedRef'
import { useFieldError } from './util/useFieldError'

export type SelectFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = Omit<SelectFieldProps, 'status' | 'onChange' | 'onBlur'> & {
  name: TFieldName
  transformEmptyToNull?: boolean
  registerOptions?: RegisterOptions<TFieldValues, TFieldName>
}

/**
 * A [SelectField](../?path=/docs/components-form-selectfield--default-story) within the context of a `react-hook-form` form.
 *
 * The form value that is returned for validation is of type `string` by default. If `transformEmptyToNull` is `true` and the input is empty, `null` is returned.
 *
 * This component also manages the value of React Hook Form. If the selected value is not in the list of children, the value is set to the first option (or an empty string if there are no options).
 * For this to work, the direct children of this component must be `Option` components (an array of `Option`s, not React Fragments or other components).
 */
export const SelectFormField = forwardRef(function SelectFormField<
  TFieldValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  {
    mode,
    variant,
    name,
    transformEmptyToNull = false,
    registerOptions,
    message,
    children,
    ...props
  }: SelectFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLSelectElement>
) {
  const { register } = useFormContext<TFieldValues>()
  const { ref: formFieldRef, ...formFieldProps } = register<TFieldName>(name, {
    setValueAs: (input) => {
      if (input === '' && transformEmptyToNull) {
        return null
      }
      return input
    },
    ...registerOptions,
  })

  const error = useFieldError(name)
  const forwardedRef = useForwardedRef(ref)

  const { setValue } = useFormContext<TFieldValues>()
  const formValue = useWatch({ name })

  // Make sure the React Hook Form value is always set to the selected option
  // If the selected value is not in the list of children, set the value to the first option (or an empty string if there are no options)
  useEffect(() => {
    const childrenArray = Children.toArray(children)

    const childWithFormValueExists = childrenArray.some(
      (child) => isOption(child) && child.props.value === formValue
    )

    if (!childWithFormValueExists) {
      const firstChild = childrenArray[0]
      const newValue = isOption(firstChild) ? firstChild.props.value : ''

      if (newValue !== formValue) {
        setValue(name, newValue as typeof formValue, {
          shouldDirty: true,
          shouldTouch: false,
        })
      }
    }
  }, [name, children, formValue, setValue])

  return (
    <SelectField
      mode={mode}
      variant={variant}
      {...props}
      {...formFieldProps}
      ref={(e) => {
        formFieldRef(e)
        forwardedRef.current = e
      }}
      message={error?.message?.toString() || message}
      status={error ? Status.invalid : undefined}
    >
      {children}
    </SelectField>
  )
})

function isOption(
  child: ReactNode
): child is ReactElement<ComponentProps<typeof Option>> {
  return isValidElement(child) && child.type === Option
}
