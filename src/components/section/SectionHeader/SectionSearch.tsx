import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { ReactElement } from 'react'
import { useInternationalization } from '../../../framework'
import { Input, InputProps, Variant } from '../../form'

// Utility function to exclude props from a union type
type ExcludeProp<Type, Fields> = {
  [Property in keyof Type as Exclude<Property, Fields>]: Type[Property]
}

// Exclude ref to avoid TypeScript error. Should be fixed in the future.
// Make name optional to use 'search' as default
export type SectionSearchProps = ExcludeProp<InputProps, 'ref' | 'name'> &
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
