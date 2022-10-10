import { ReactElement, ReactNode } from 'react'
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form'
import { ClassNameProps } from '../../types'
import { AutoSubmit, Form } from '../../form'

export type SectionFilterProps<F extends FieldValues> = ClassNameProps &
  UseFormProps<F> & {
    /**
     * The function executed on submit
     */
    onSubmit: SubmitHandler<F>
    /**
     * If the form should submit automatically on change. Defaults to true.
     */
    autoSubmit?: boolean
    children?: ReactNode
  }

export function SectionFilter<F extends FieldValues>({
  className,
  onSubmit,
  autoSubmit = true,
  children,
  ...props
}: SectionFilterProps<F>): ReactElement | null {
  const form = useForm(props)

  return (
    <Form form={form} onSubmit={onSubmit} className={className}>
      {autoSubmit && <AutoSubmit />}
      {children}
    </Form>
  )
}
