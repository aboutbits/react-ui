import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { HeaderRightArea } from '../areas/HeaderRightArea'
import { HeaderButtonIcon, HeaderButtonIconProps } from './HeaderButtonIcon'

export type HeaderRightActionIconProps = HeaderButtonIconProps

export function HeaderRightActionIcon(
  props: HeaderRightActionIconProps
): ReactElement {
  const { header } = useTheme()

  return (
    <HeaderRightArea className={header.rightActionIcon.base}>
      <HeaderButtonIcon {...props} />
    </HeaderRightArea>
  )
}
