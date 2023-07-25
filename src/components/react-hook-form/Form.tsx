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

export const Form = forwardRef(function FormComponent<F extends FieldValues>(
  { form, onSubmit, children, ...props }: FormProps<F>,
  ref: ForwardedRef<HTMLFormElement>,
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
})
