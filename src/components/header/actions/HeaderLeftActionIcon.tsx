import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { HeaderLeftArea } from '../areas/HeaderLeftArea'
import { HeaderButtonIcon, HeaderButtonIconProps } from './HeaderButtonIcon'

export type HeaderLeftActionIconProps = HeaderButtonIconProps

export function HeaderLeftActionIcon(
  props: HeaderLeftActionIconProps
): ReactElement {
  const { header } = useTheme()

  return (
    <HeaderLeftArea className={header.leftActionIcon.base}>
      <HeaderButtonIcon {...props} />
    </HeaderLeftArea>
  )
}
