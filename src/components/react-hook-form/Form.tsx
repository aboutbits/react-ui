import { ForwardedRef, forwardRef } from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form'

type NoInfer<T> = [T][T extends unknown ? 0 : never]

type HTMLFormProps = React.DetailedHTMLProps<
  React.FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>

export type FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
> = Omit<HTMLFormProps, 'onSubmit'> & {
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>
  onSubmit?: TTransformedValues extends undefined
    ? SubmitHandler<NoInfer<TFieldValues>>
    : TTransformedValues extends FieldValues
      ? SubmitHandler<NoInfer<TTransformedValues>>
      : never
}

export const Form = forwardRef(function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
>(
  {
    form,
    onSubmit,
    children,
    ...props
  }: FormProps<TFieldValues, TContext, TTransformedValues>,
  ref: ForwardedRef<HTMLFormElement>,
) {
  return (
    <FormProvider<TFieldValues, TContext, TTransformedValues> {...form}>
      <form
        {...props}
        ref={ref}
        onSubmit={onSubmit ? void form.handleSubmit(onSubmit) : undefined}
      >
        {children}
      </form>
    </FormProvider>
  )
})
