import {
  ComponentPropsWithRef,
  FormEvent,
  ForwardedRef,
  forwardRef,
} from 'react'
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form'

type NoInfer<T> = [T][T extends unknown ? 0 : never]

export type FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
> = Omit<ComponentPropsWithRef<'form'>, 'onSubmit'> & {
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>
  onSubmit?: TTransformedValues extends undefined
    ? SubmitHandler<NoInfer<TFieldValues>>
    : TTransformedValues extends FieldValues
      ? SubmitHandler<NoInfer<TTransformedValues>>
      : never
  onPreSubmit?: (
    e: FormEvent<HTMLFormElement>,
  ) => void | Promise<void> | boolean | Promise<boolean> // eslint-disable-line @typescript-eslint/no-invalid-void-type
}

export const Form = forwardRef(function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined,
>(
  {
    form,
    onSubmit,
    onPreSubmit,
    children,
    ...props
  }: FormProps<TFieldValues, TContext, TTransformedValues>,
  ref: ForwardedRef<HTMLFormElement>,
) {
  const handleSubmit = onSubmit
    ? async (e: FormEvent<HTMLFormElement>) => {
        if (onPreSubmit) {
          const result = await onPreSubmit(e)

          if (result === false) {
            e.preventDefault()
            return
          }
        }
        return form.handleSubmit(onSubmit)(e)
      }
    : undefined

  return (
    <FormProvider<TFieldValues, TContext, TTransformedValues> {...form}>
      <form
        {...props}
        ref={ref}
        onSubmit={handleSubmit ? (e) => void handleSubmit(e) : undefined}
      >
        {children}
      </form>
    </FormProvider>
  )
})
