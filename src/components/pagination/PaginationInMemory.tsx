import { useIntl } from 'react-intl'
import classNames from 'classnames'
import { calculatePagination, IndexType } from '@aboutbits/pagination'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'
import { PaginationContainer } from './PaginationContainer'
import {
  PaginationNextContent,
  PaginationPreviousContent,
} from './PaginationPreviousNextContent'
import {
  PaginationPagesList,
  PaginationPagesListItem,
} from './PaginationPagesList'

type Props = {
  /**
   * Defines the current page.
   * */
  page: number
  /**
   * Defines the number of elements per page.
   * */
  size: number
  /**
   * Defines the total number of elements.
   * */
  total: number
  /**
   * Defines the action to change the page.
   * */
  onChangePage: (page: number) => void
  /**
   * Defines whether the pagination is zero or one based.
   */
  indexType?: IndexType
}

type SectionPaginationInMemoryButtonProps = {
  'aria-label': string
  'aria-current'?: boolean | 'page'
  disabled: boolean
  pageIndex: number
} & Pick<Props, 'onChangePage'> &
  ClassNameProps

const SectionPaginationInMemoryButton: React.FC<SectionPaginationInMemoryButtonProps> =
  ({
    disabled,
    onChangePage,
    pageIndex,
    className = '',
    children,
    ...props
  }) => {
    const { section } = useTheme()
    return (
      <button
        aria-disabled={disabled}
        disabled={disabled}
        className={classNames(
          section.pagination.page.base,
          disabled
            ? section.pagination.page.disabled
            : section.pagination.page.enabled,
          className
        )}
        onClick={() => {
          onChangePage(pageIndex)
        }}
        {...props}
      >
        {children}
      </button>
    )
  }

const PaginationInMemory: React.FC<Props> = ({
  page,
  size,
  total,
  onChangePage,
  indexType = IndexType.ZERO_BASED,
}) => {
  const intl = useIntl()
  const { section } = useTheme()
  const pagination = calculatePagination(page, size, total, { indexType })

  if (pagination === null) return null

  return (
    <PaginationContainer>
      <SectionPaginationInMemoryButton
        aria-label={intl.formatMessage({ id: 'shared.pagination.prev' })}
        disabled={pagination.previous.isDisabled}
        onChangePage={onChangePage}
        pageIndex={pagination.previous.indexNumber}
      >
        <PaginationPreviousContent />
      </SectionPaginationInMemoryButton>

      <PaginationPagesList>
        {pagination.pages.map((page) => {
          return (
            <PaginationPagesListItem key={page.indexNumber}>
              <SectionPaginationInMemoryButton
                aria-current={page.isCurrent ? 'page' : false}
                aria-label={intl.formatMessage(
                  { id: 'shared.pagination.page' },
                  { page: page.displayNumber }
                )}
                className={classNames(
                  section.pagination.page.normal,
                  page.isCurrent ? section.pagination.page.current : ''
                )}
                onChangePage={onChangePage}
                pageIndex={page.indexNumber}
                disabled={false}
              >
                {page.displayNumber}
              </SectionPaginationInMemoryButton>
            </PaginationPagesListItem>
          )
        })}
      </PaginationPagesList>

      <SectionPaginationInMemoryButton
        aria-label={intl.formatMessage({ id: 'shared.pagination.next' })}
        disabled={pagination.next.isDisabled}
        onChangePage={onChangePage}
        pageIndex={pagination.next.indexNumber}
      >
        <PaginationNextContent />
      </SectionPaginationInMemoryButton>
    </PaginationContainer>
  )
}

export { PaginationInMemory }
