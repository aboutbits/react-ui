import IconFilterList from '@aboutbits/react-material-icons/dist/IconFilterList'
import { ReactElement } from 'react'
import { SectionAction, SectionActionProps } from '../section'
import { useInternationalization, useTheme } from '../../framework'

type Props = Pick<SectionActionProps, 'onClick'> &
  Partial<Pick<SectionActionProps, 'label' | 'icon'>> & {
    isFiltering?: boolean
    asDialogMediaQuery?: string
  }

export function SectionFilterDialogAction({
  onClick,
  label,
  icon: Icon,
  isFiltering,
}: Props): ReactElement {
  const internationalization = useInternationalization()
  const { section } = useTheme()

  return (
    <div className="relative flex items-center">
      <SectionAction
        icon={Icon || IconFilterList}
        label={label || internationalization.translate('shared.filter.label')}
        onClick={onClick}
      />
      {isFiltering && <div className={section.filter.trigger.base} />}
    </div>
  )
}
