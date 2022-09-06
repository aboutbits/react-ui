import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { Variant } from '../../button'
import { Tone } from '../../types'
import { HeaderLeftArea } from '../areas/HeaderLeftArea'
import { HeaderButtonIcon, HeaderButtonIconProps } from './HeaderButtonIcon'

export type HeaderLeftActionIconProps = Omit<HeaderButtonIconProps, 'variant'>

export function HeaderLeftActionIcon(
  props: HeaderLeftActionIconProps
): ReactElement {
  const { header } = useTheme()

  return (
    <HeaderLeftArea className={header.leftActionIcon.base}>
      <HeaderButtonIcon
        variant={Variant.transparent}
        tone={Tone.neutral}
        {...props}
      />
    </HeaderLeftArea>
  )
}
