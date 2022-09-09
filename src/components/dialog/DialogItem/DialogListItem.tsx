import { ReactElement, ReactNode } from 'react'

export type DialogListItemProps = {
  children?: ReactNode
}

export function DialogListItem({
  children,
}: DialogListItemProps): ReactElement {
  return <>{children}</>
}
