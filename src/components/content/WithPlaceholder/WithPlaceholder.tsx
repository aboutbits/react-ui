import { ReactNode } from 'react'

export type WithPlaceholderProps = {
  children: ReactNode
  placeholder?: ReactNode
}

export function WithPlaceholder({
  children,
  placeholder = '-',
}: WithPlaceholderProps) {
  return (
    <>
      {typeof children === 'number'
        ? isNaN(children)
          ? placeholder
          : children
        : children || placeholder}
    </>
  )
}
