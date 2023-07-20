import {
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  useEffect,
} from 'react'
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormProps,
  useFormState,
} from 'react-hook-form'
import { isEqual } from 'lodash'
import { AutoSubmit, Form } from '../../react-hook-form'
import { ClassNameProps } from '../../types'

export type SectionFilterProps<F extends FieldValues> = ClassNameProps &
  Omit<UseFormProps<F>, 'defaultValues'> & {
    defaultValues?: DefaultValues<F>
    /**
     * The function executed on submit
     */
    onSubmit: SubmitHandler<F>
    /**
     * If the form should submit automatically on change. Defaults to true.
     */
    autoSubmit?: boolean
    /**
     * The auto-submit interval in milliseconds
     */
    autoSubmitInterval?: number
    /**
     * If the form should reset when the default values change. Defaults to false.
     */
    enableReinitialize?: boolean
    children?: ReactNode
  }

export function SectionFilterComponent<F extends FieldValues>(
  {
    className,
    onSubmit,
    autoSubmit = true,
    autoSubmitInterval,
    enableReinitialize = true,
    children,
    ...props
  }: SectionFilterProps<F>,
  ref: ForwardedRef<HTMLFormElement>
): ReactElement | null {
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

  const handleSubmit: SubmitHandler<F> = (data, event) => {
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
}

// Type assertion required for a component with forwarded ref and generic type
export const SectionFilter = forwardRef(SectionFilterComponent) as <
  F extends FieldValues
>(
  props: SectionFilterProps<F> & { ref?: React.ForwardedRef<HTMLFormElement> }
) => ReturnType<typeof SectionFilterComponent>
