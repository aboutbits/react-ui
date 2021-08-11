import classNames from 'classnames'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'

import { SectionListItem } from '../SectionItem/SectionItem'
import { useTheme } from '../../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps

type SectionListEmptyProps = ClassNameProps

type SectionListErrorProps = ClassNameProps

export const SectionContentList: React.FC<Props> = ({
  children,
  className,
}) => {
  const { section } = useTheme()
  return (
    <div
      className={classNames(
        section.contentList.base,
        section.contentList.normal,
        className
      )}
    >
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
      className={classNames(section.contentList.empty.base, className)}
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
      <div
        className={classNames(
          section.contentList.error.iconContainer.base,
          section.contentList.error.iconContainer.normal
        )}
      >
        <IconWarning
          height={22}
          width={22}
          className={classNames(
            section.contentList.error.icon.base,
            section.contentList.error.icon.normal
          )}
        />
      </div>
      <span className={section.contentList.error.children.normal}>
        {children}
      </span>
    </SectionListItem>
  )
}
