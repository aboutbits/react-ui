import { ForwardedRef, forwardRef, ReactNode, useEffect } from 'react'
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormProps,
  useFormState,
} from 'react-hook-form'
import { isEqual } from 'lodash'
import { ClassNameProps } from '../types'
import { AutoSubmit } from './AutoSubmit'
import { Form } from './Form'

export type FilterFormProps<TFieldValues extends FieldValues> = ClassNameProps &
  Omit<UseFormProps<TFieldValues>, 'defaultValues'> & {
    defaultValues?: DefaultValues<TFieldValues>
    onSubmit: SubmitHandler<TFieldValues>
    /**
     * Whether the form should submit automatically on change.
     *
     * @default true
     */
    autoSubmit?: boolean
    /**
     * The auto-submit interval in milliseconds.
     */
    autoSubmitInterval?: number
    /**
     * Whether the form should reset when the default values change.
     *
     * @default true
     */
    enableReinitialize?: boolean
    children?: ReactNode
  }

export const FilterForm = forwardRef(function FilterForm<
  TFieldValues extends FieldValues
>(
  {
    className,
    onSubmit,
    autoSubmit = true,
    autoSubmitInterval,
    enableReinitialize = true,
    children,
    ...props
  }: FilterFormProps<TFieldValues>,
  ref: ForwardedRef<HTMLFormElement>
) {
  const form = useForm(props)
  const { dirtyFields } = useFormState({ control: form.control })

  useEffect(() => {
    if (enableReinitialize && props.defaultValues) {
      // Only override the values of the non-dirty fields to prevent overriding the user's input
      form.reset(props.defaultValues, {
        keepDirtyValues: true,
      })
      // Set the form as non-dirty if the current values and the default values match
      // If they do not match, it means that the user changed some fields and we want those to stay dirty so that they are submitted
      const currentValues = form.getValues()
      if (isEqual(currentValues, props.defaultValues)) {
        form.reset(currentValues)
      }
    }
  }, [enableReinitialize, props.defaultValues, form])

  const handleSubmit: SubmitHandler<TFieldValues> = (data, event) => {
    // Only submit the form if there are dirty fields
    if (Object.keys(dirtyFields).length > 0) {
      onSubmit(data, event)
    }
  }

  return (
    <Form form={form} onSubmit={handleSubmit} className={className} ref={ref}>
      {autoSubmit && <AutoSubmit interval={autoSubmitInterval} />}
      {children}
    </Form>
  )
})
