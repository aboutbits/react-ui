import IconSearchOutlinedFilled from '@aboutbits/react-material-icons/dist/IconSearchOutlinedFilled'
import { ForwardedRef, forwardRef } from 'react'
import { FieldPath, FieldValues } from 'react-hook-form'
import { useInternationalization } from '../../framework'
import { InputFormField, InputFormFieldProps } from './InputFormField'

export type SearchFormFieldProps<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
> = Omit<InputFormFieldProps<TFieldValues, TFieldName>, 'ref' | 'name'> &
  Partial<Pick<InputFormFieldProps<TFieldValues, TFieldName>, 'name'>>

/**
 * A standardized search input, like [SearchField](../?path=/docs/components-form-searchfield--docs), but within the context of a `react-hook-form` form.
 */
export const SearchFormField = forwardRef(function SearchFormField<
  TFieldValues extends FieldValues,
  TFieldName extends FieldPath<TFieldValues>,
>(
  {
    name = 'search' as TFieldName,
    ...props
  }: SearchFormFieldProps<TFieldValues, TFieldName>,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const { messages } = useInternationalization()

  return (
    <InputFormField
      name={name}
      ref={ref}
      placeholder={messages['search.placeholder']}
      iconStart={IconSearchOutlinedFilled}
      {...props}
    />
  )
})
