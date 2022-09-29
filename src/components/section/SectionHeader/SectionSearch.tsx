import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { ReactElement } from 'react'
import { useInternationalization } from '../../../framework'
import {
  Input,
  InputProps,
  InputWithLabelProps,
  InputWithoutLabelProps,
  Variant,
} from '../../form'

// Exclude ref to avoid TypeScript error. Should be fixed in the future.
// Make name optional to use 'search' as default
export type SectionSearchProps = (
  | Omit<InputWithoutLabelProps, 'ref' | 'name'>
  | Omit<InputWithLabelProps, 'ref' | 'name'>
) &
  Partial<Pick<InputProps, 'name'>>

export function SectionSearch({
  name = 'search',
  ...props
}: SectionSearchProps): ReactElement {
  const internationalization = useInternationalization()

  return (
    <Input
      name={name}
      placeholder={internationalization.translate('shared.search.placeholder')}
      variant={Variant.soft}
      iconStart={IconSearch}
      {...props}
    />
  )
}
