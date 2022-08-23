import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import { ReactElement, ReactNode } from 'react'
import { ButtonIcon, Variant } from '../../button'
import { Tone } from '../../types'
import { DialogHeaderArea } from '../areas/DialogHeaderArea'
import { DialogHeaderLeftArea } from '../areas/DialogHeaderLeftArea'
import { DialogHeaderRightArea } from '../areas/DialogHeaderRightArea'
import { DialogHeaderTitle } from '../areas/DialogHeaderTitle'

type Props = {
  title: ReactNode
  labelIcon: string
  startSearch: () => void
  onClose: React.MouseEventHandler
}

export function HeaderNoSearch({
  title,
  labelIcon,
  startSearch,
  onClose,
}: Props): ReactElement {
  return (
    <DialogHeaderArea>
      <DialogHeaderLeftArea>
        <ButtonIcon
          icon={IconClose}
          variant={Variant.transparent}
          tone={Tone.neutral}
          onClick={onClose}
        />
      </DialogHeaderLeftArea>
      <DialogHeaderTitle>{title}</DialogHeaderTitle>
      <DialogHeaderRightArea>
        <ButtonIcon
          icon={IconSearch}
          label={labelIcon}
          variant={Variant.transparent}
          tone={Tone.neutral}
          onClick={startSearch}
        />
      </DialogHeaderRightArea>
    </DialogHeaderArea>
  )
}
