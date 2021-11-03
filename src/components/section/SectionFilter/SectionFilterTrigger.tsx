import IconFilterList from '@aboutbits/react-material-icons/dist/IconFilterList'
import { ReactElement } from 'react'
import {
  SectionAction,
  SectionActionProps,
} from '../SectionHeader/SectionAction'
import { useInternationalization } from '../../../framework'

type Props = Pick<SectionActionProps, 'onClick'> &
  Partial<Pick<SectionActionProps, 'label' | 'Icon'>>

function SectionFilterTrigger({ onClick, label, Icon }: Props): ReactElement {
  const internationalization = useInternationalization()

  return (
    <SectionAction
      Icon={Icon || IconFilterList}
      label={label || internationalization.translate('shared.filter.label')}
      onClick={onClick}
    />
  )
}

export { SectionFilterTrigger }
