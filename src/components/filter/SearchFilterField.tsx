import classNames from 'classnames'
import { forwardRef } from 'react'
import { FormVariant, SearchField, SearchFieldProps } from '../form'
import { useTheme } from '../../framework'
import { FilterOptions, useFilter } from './useFilter'

export type SearchFilterFieldProps = SearchFieldProps & {
  filter: {
    value: HTMLInputElement['value']
    setValue: (v: HTMLInputElement['value']) => void
    options?: FilterOptions
  }
}

export const SearchFilterField = forwardRef<
  HTMLInputElement,
  SearchFilterFieldProps
>(function SearchFilterField({ filter, className, ...props }, ref) {
  const {
    filter: { search: theme },
  } = useTheme()

  const filterProps = useFilter<HTMLInputElement>()(
    filter.value,
    filter.setValue,
    { debounce: true, ...filter.options },
  )

  return (
    <SearchField
      {...filterProps}
      variant={FormVariant.Soft}
      className={classNames(theme.base, className)}
      {...props}
      ref={ref}
    />
  )
})
