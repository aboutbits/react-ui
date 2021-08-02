import classNames from 'classnames'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'

import { SectionListItem } from '../SectionItem/SectionItem'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

type Props = ClassNameProps

type SectionListEmptyProps = ClassNameProps

type SectionListErrorProps = ClassNameProps

export const SectionContentList: React.FC<Props> = ({
  children,
  className,
}) => {
  const { section } = useTheme()
  return (
    <div className={classNames(section.sectionContentList.base, className)}>
      {children}
    </div>
  )
}

export const SectionContentListEmpty: React.FC<SectionListEmptyProps> = ({
  children,
  className,
}) => (
  <SectionListItem className={classNames('justify-center py-4', className)}>
    {children}
  </SectionListItem>
)

export const SectionContentListError: React.FC<SectionListErrorProps> = ({
  children,
  className,
}) => (
  <SectionListItem className={classNames('justify-center py-4', className)}>
    <div className="p-1.5 mr-2 rounded-full bg-section-content-list-error-icon">
      <IconWarning
        height={22}
        width={22}
        className="fill-current text-section-content-list-error-icon"
      />
    </div>
    <span className="text-section-content-list-error">{children}</span>
  </SectionListItem>
)
