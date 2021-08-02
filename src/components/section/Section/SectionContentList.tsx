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
    <div className={classNames(section.contentList.base, className)}>
      {children}
    </div>
  )
}

export const SectionContentListEmpty: React.FC<SectionListEmptyProps> = ({
  children,
  className,
}) => {
  const { section } = useTheme()
  return (
    <SectionListItem
      className={classNames(section.contentList.empty, className)}
    >
      {children}
    </SectionListItem>
  )
}

export const SectionContentListError: React.FC<SectionListErrorProps> = ({
  children,
  className,
}) => {
  const { section } = useTheme()
  return (
    <SectionListItem
      className={classNames(section.contentList.error.base, className)}
    >
      <div className={section.contentList.error.circle.base}>
        <IconWarning
          height={22}
          width={22}
          className={section.contentList.error.icon.base}
        />
      </div>
      <span className={section.contentList.error.children.base}>
        {children}
      </span>
    </SectionListItem>
  )
}
