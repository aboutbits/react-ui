import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { ReactElement } from 'react'
import { useInternationalization } from '../../../framework'
import { Input, InputProps, Variant } from '../../form'

type ExcludeProp<Type, Fields> = {
  [Property in keyof Type as Exclude<Property, Fields>]: Type[Property]
}

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
