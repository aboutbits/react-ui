import { useMatchMediaQuery } from '@aboutbits/react-toolbox'
import classNames from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import { SelectFieldProps, SelectField, FormVariant } from '../form'
import { LoadingInput } from '../loading'
import { useTheme } from '../../framework'
import { FilterOptions, useFilter } from './useFilter'

export type HTMLElementWithValue = HTMLElement & {
  value: unknown
}

export type FilterProps<
  TElement extends HTMLElementWithValue,
  TValue extends TElement['value'],
> = {
  filter: {
    value: TValue
    setValue: (v: TValue) => void
    options?: FilterOptions
  }
}

export type SelectFilterFieldProps<TValue extends HTMLSelectElement['value']> =
  SelectFieldProps & FilterProps<HTMLSelectElement, TValue>

function SelectFilterFieldComponent<TValue extends HTMLSelectElement['value']>(
  { filter, className, ...props }: SelectFilterFieldProps<TValue>,
  ref: ForwardedRef<HTMLSelectElement>,
) {
  const isScreenMedium = useMatchMediaQuery('(min-width: 768px)')

  const filterProps = useFilter<HTMLSelectElement>()(
    filter.value,
    filter.setValue,
    filter.options,
  )

  const {
    filter: { select: theme },
  } = useTheme()

  return (
    <SelectField
      {...filterProps}
      variant={isScreenMedium ? FormVariant.Transparent : FormVariant.Soft}
      className={classNames(theme.normal, className)}
      {...props}
      ref={ref}
    />
  )
}

/**
 * A SelectField configured to be used for filtering a list.
 */
export const SelectFilterField = forwardRef(SelectFilterFieldComponent) as <
  TValue extends HTMLSelectElement['value'],
>(
  props: SelectFilterFieldProps<TValue> & {
    ref?: ForwardedRef<HTMLSelectElement>
  },
) => ReturnType<typeof SelectFilterFieldComponent>

export function LoadingSelectFilterField() {
  const {
    filter: { select: theme },
  } = useTheme()

  return <LoadingInput withLabel={false} className={theme.loading} />
}
