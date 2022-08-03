import classNames from 'classnames'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'

import { SectionListItem } from '../SectionItem/SectionItem'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionContentListProps = ClassNameProps

type SectionListEmptyProps = ClassNameProps

type SectionListErrorProps = ClassNameProps

export const SectionContentList: React.FC<SectionContentListProps> = ({
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
      className={classNames(section.contentListEmpty.base, className)}
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
      className={classNames(section.contentListError.base, className)}
    >
      <div className={section.contentListError.iconContainer.base}>
        <IconWarning
          height={22}
          width={22}
          className={section.contentListError.icon.base}
        />
      </div>
      <span className={section.contentListError.children.base}>{children}</span>
    </SectionListItem>
  )
}
