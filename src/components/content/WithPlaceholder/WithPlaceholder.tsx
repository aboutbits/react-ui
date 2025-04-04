import { PropsWithChildren, ReactNode } from 'react'

export type WithPlaceholderProps = PropsWithChildren<{
  /**
   * Defines the placeholder to be rendered if the children is not valid.
   */
  placeholder?: ReactNode
}>

/**
 * This component validates the content and displays a placeholder if the content is empty, NaN, null, undefined or false.
 */
export function WithPlaceholder({
  placeholder = '-',
  children,
}: WithPlaceholderProps) {
  if (
    children === null ||
    children === undefined ||
    children === '' ||
    children === false ||
    (typeof children === 'number' && isNaN(children))
  ) {
    return placeholder
  }

  return children
}
