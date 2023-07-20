import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { ForwardedRef, forwardRef } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'
import { useInternationalization } from '../../framework'
import { FormVariant } from '../form'
import { InputFormField, InputFormFieldProps } from './InputFormField'

export type SearchFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
> = Omit<InputFormFieldProps<TFieldValues, TFieldName>, 'ref' | 'name'> &
  Partial<Pick<InputFormFieldProps<TFieldValues, TFieldName>, 'name'>>

export const SearchFormField = forwardRef(function SearchFormField<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>
>(
  {
    name = 'search' as TFieldName,
    ...props
  }: SearchFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const { messages } = useInternationalization()

  return (
    <InputFormField
      name={name}
      ref={ref}
      placeholder={messages['search.placeholder']}
      variant={FormVariant.soft}
      iconStart={IconSearch}
      {...props}
    />
  )
})
