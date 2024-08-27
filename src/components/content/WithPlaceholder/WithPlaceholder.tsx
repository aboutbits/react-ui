import { PropsWithChildren, ReactNode } from 'react'

export type WithPlaceholderProps = PropsWithChildren<{
  /**
   * Defines the placeholder to be rendered if the children is not valid.
   */
  placeholder?: ReactNode
}>

/**
 * This component validates the content and displays a placeholder if the content is empty, null or undefined.
 */
export function WithPlaceholder({
  placeholder = '-',
  children,
}: WithPlaceholderProps) {
  return (
    <>
      {typeof children === 'number'
        ? isNaN(children)
          ? placeholder
          : children
        : children === null || children === undefined || children === ''
          ? placeholder
          : children}
    </>
  )
}
