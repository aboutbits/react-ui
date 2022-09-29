import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { forwardRef } from 'react'
import { useInternationalization } from '../../../framework'
import {
  Input,
  InputProps,
  InputWithLabelProps,
  InputWithoutLabelProps,
  Variant,
} from '../../form'

// Make name optional to use 'search' as default
export type SectionSearchProps = (
  | Omit<InputWithoutLabelProps, 'ref' | 'name'>
  | Omit<InputWithLabelProps, 'ref' | 'name'>
) &
  Partial<Pick<InputProps, 'name'>>

export const SectionSearch = forwardRef<HTMLInputElement, SectionSearchProps>(
  ({ name = 'search', ...props }, ref) => {
    const internationalization = useInternationalization()

    return (
      <Input
        name={name}
        ref={ref}
        placeholder={internationalization.translate(
          'shared.search.placeholder'
        )}
        variant={Variant.soft}
        iconStart={IconSearch}
        {...props}
      />
    )
  }
)

SectionSearch.displayName = 'SectionSearch'
