import { ReactNode } from 'react'

export type WithPlaceholderProps = {
  /**
   * Defineds the children to be rendered.
   */
  children: ReactNode
  /**
   * Defineds the placeholder to be rendered if the children is not valid.
   */
  placeholder?: ReactNode
}

/**
 * This component validates the content and displays a placeholder if the content is not valid e.g. empty, null or undefined.
 */
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
