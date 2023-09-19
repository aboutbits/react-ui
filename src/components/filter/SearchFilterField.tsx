import classNames from 'classnames'
import { forwardRef } from 'react'
import { FormVariant, SearchField, SearchFieldProps } from '../form'
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
  const filterProps = useFilter<HTMLInputElement>()(
    filter.value,
    filter.setValue,
    { debounce: true, ...filter.options },
  )

  return (
    <SearchField
      {...filterProps}
      variant={FormVariant.Soft}
      className={classNames('w-full grow md:w-auto', className)}
      {...props}
      ref={ref}
    />
  )
})
