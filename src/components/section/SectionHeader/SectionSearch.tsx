import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { ReactElement } from 'react'
import { useInternationalization, useTheme } from '../../../framework'
import { Input, InputProps, Variant } from '../../form'

export type SectionSearchProps = Omit<InputProps, 'ref' | 'name'> &
  Partial<Pick<InputProps, 'name'>>

export function SectionSearch({ ...props }: SectionSearchProps): ReactElement {
  const internationalization = useInternationalization()
  const { section } = useTheme()

  return (
    <Input
      name="search"
      placeholder={internationalization.translate('shared.search.placeholder')}
      variant={Variant.soft}
      iconStart={IconSearch}
      className={section.search.input.base}
      {...props}
    />
  )
}
