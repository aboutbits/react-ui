import { FormattedMessage } from 'react-intl'
import IconKeyboardArrowLeft from '@aboutbits/react-material-icons/dist/IconKeyboardArrowLeft'
import IconKeyboardArrowRight from '@aboutbits/react-material-icons/dist/IconKeyboardArrowRight'
import classNames from 'classnames'
import { useTheme } from '../../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../../types'

const SectionPaginationContainer: React.FC<ClassNameProps> = ({
  className,
  children,
}) => {
  const { section } = useTheme()

  return (
    <div className={classNames(section.pagination.container.base, className)}>
      {children}
    </div>
  )
}

const SectionPaginationPreviousContent: React.FC<ClassNameProps> = ({
  className,
}) => {
  const { section } = useTheme()

  return (
    <>
      <IconKeyboardArrowLeft
        className={classNames(
          section.pagination.previousContent.base,
          className
        )}
      />
      <span className="hidden lg:block">
        <FormattedMessage id="shared.pagination.prev" />
      </span>
    </>
  )
}

const SectionPaginationNextContent: React.FC<ClassNameProps> = ({
  className,
}) => {
  const { section } = useTheme()

  return (
    <>
      <span className="hidden lg:block">
        <FormattedMessage id="shared.pagination.next" />
      </span>
      <IconKeyboardArrowRight
        className={classNames(
          section.pagination.nextContent.icon.base,
          className
        )}
      />
    </>
  )
}

const SectionPaginationPagesList: React.FC<ClassNameProps> = ({
  className,
  children,
}) => {
  const { section } = useTheme()

  return (
    <ul className={classNames(section.pagination.pagesList.base, className)}>
      {children}
    </ul>
  )
}

const SectionPaginationPagesListItem: React.FC = ({ children }) => (
  <li>{children}</li>
)

export {
  SectionPaginationContainer,
  SectionPaginationPreviousContent,
  SectionPaginationNextContent,
  SectionPaginationPagesList,
  SectionPaginationPagesListItem,
}
