import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { ButtonVariant } from '../../button'
import { Tone } from '../../types'
import { HeaderRightArea } from '../areas/HeaderRightArea'
import { HeaderButtonIcon, HeaderButtonIconProps } from './HeaderButtonIcon'

export type HeaderRightActionIconProps = HeaderButtonIconProps

export function HeaderRightActionIcon(
  props: HeaderRightActionIconProps,
): ReactElement {
  const { header } = useTheme()

  return (
    <HeaderRightArea className={header.rightActionIcon.base}>
      <HeaderButtonIcon
        variant={ButtonVariant.Transparent}
        tone={Tone.Neutral}
        {...props}
      />
    </HeaderRightArea>
  )
}
