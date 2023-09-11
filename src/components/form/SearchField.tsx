import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { forwardRef } from 'react'
import { useInternationalization } from '../../framework'
import { InputField, InputFieldProps } from './InputField'

export type SearchFieldProps<> = Omit<InputFieldProps, 'ref' | 'name'> &
  Partial<Pick<InputFieldProps, 'name'>>

/**
 * A standardized search input.
 */
export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField({ name = 'search', ...props }, ref) {
    const { messages } = useInternationalization()

    return (
      <InputField
        name={name}
        ref={ref}
        placeholder={messages['search.placeholder']}
        iconStart={IconSearch}
        {...props}
      />
    )
  },
)
