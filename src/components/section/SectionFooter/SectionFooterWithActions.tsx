import { ReactElement } from 'react'
import { Actions, ActionsProps } from '../../action'
import { SectionFooterArea } from './SectionFooterArea'

export type SectionFooterWithActionsProps = ActionsProps

export function SectionFooterWithActions({
  children,
  className,
  ...props
}: SectionFooterWithActionsProps): ReactElement {
  return (
    <SectionFooterArea className={className}>
      <Actions {...props}>{children}</Actions>
    </SectionFooterArea>
  )
}
