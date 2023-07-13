import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { ForwardedRef, forwardRef } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'
import { useInternationalization } from '../../../framework'
import { FormVariant } from '../../form'
import { InputFormField, InputFormFieldProps } from '../../react-hook-form'

// Make name optional to use 'search' as default
export type SectionSearchProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = Omit<InputFormFieldProps<TFieldValues, TFieldName>, 'ref' | 'name'> &
  Partial<Pick<InputFormFieldProps<TFieldValues, TFieldName>, 'name'>>

export const SectionSearch = forwardRef(function SectionSearch<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
>(
  {
    name = 'search' as TFieldName,
    ...props
  }: SectionSearchProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { messages } = useInternationalization()

  return (
    <InputFormField
      name={name}
      ref={ref}
      placeholder={messages['search.placeholder']}
      variant={FormVariant.Soft}
      iconStart={IconSearch}
      {...props}
    />
  )
})
