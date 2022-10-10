import { ForwardedRef, forwardRef, ReactElement } from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form'

type HTMLFormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>

export type FormProps<F extends FieldValues> = Omit<
  HTMLFormProps,
  'onSubmit'
> & {
  form: UseFormReturn<F>
  onSubmit?: SubmitHandler<F>
}

function FormComponent<F extends FieldValues>(
  { form, onSubmit, children, ...props }: FormProps<F>,
  ref: ForwardedRef<HTMLFormElement>
): ReactElement {
  return (
    <FormProvider {...form}>
      <form
        {...props}
        ref={ref}
        onSubmit={onSubmit ? form.handleSubmit(onSubmit) : undefined}
      >
        {children}
      </form>
    </FormProvider>
  )
}

// Type assertion required for a component with forwarded ref and generic type
export const Form = forwardRef(FormComponent) as <F extends FieldValues>(
  props: FormProps<F> & { ref?: React.ForwardedRef<HTMLFormElement> }
) => ReturnType<typeof FormComponent>
