import IconFilterList from '@aboutbits/react-material-icons/dist/IconFilterList'
import { ReactElement } from 'react'
import { SectionAction, SectionActionProps } from '../section'
import { useInternationalization, useTheme } from '../../framework'

type Props = Pick<SectionActionProps, 'onClick'> &
  Partial<Pick<SectionActionProps, 'label' | 'Icon'>> & {
    isFiltering: boolean
  }

function SectionFilterAction({
  onClick,
  label,
  Icon,
  isFiltering,
}: Props): ReactElement {
  const internationalization = useInternationalization()
  const { section } = useTheme()

  return (
    <div className="relative flex items-center">
      <SectionAction
        Icon={Icon || IconFilterList}
        label={label || internationalization.translate('shared.filter.label')}
        onClick={onClick}
      />
      {isFiltering && <div className={section.filter.trigger.base} />}
    </div>
  )
}

export { SectionFilterAction }
