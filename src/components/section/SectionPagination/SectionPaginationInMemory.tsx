import { useIntl } from 'react-intl'
import classNames from 'classnames'
import { calculatePagination } from '@aboutbits/pagination'
import { useTheme } from '../../../designSystem/theme/ThemeContext'
import {
  SectionPaginationContainer,
  SectionPaginationNextContent,
  SectionPaginationPagesList,
  SectionPaginationPagesListItem,
  SectionPaginationPreviousContent,
} from './SectionPagination'

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
  paginationActions: { setPage: (page: number) => void }
  /**
   * Defines the accessibility label for the previous button.
   * */
  previousLabel: string
  /**
   * Defines the accessibility label for the next button.
   * */
  nextLabel: string
}

const SectionPaginationInMemory: React.FC<Props> = ({
  page,
  size,
  total,
  paginationActions,
  previousLabel,
  nextLabel,
}) => {
  const intl = useIntl()
  const pagination = calculatePagination(page, size, total)

  if (pagination === null) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { section } = useTheme()

  return (
    <SectionPaginationContainer>
      <button
        aria-label={previousLabel}
        aria-disabled={pagination.previous.isDisabled}
        className={classNames(
          'flex items-center',
          pagination.previous.isDisabled
            ? section.pagination.inMemory.link.disabled
            : section.pagination.inMemory.link.enabled
        )}
        onClick={() => {
          paginationActions.setPage(pagination.previous.indexNumber)
        }}
      >
        <SectionPaginationPreviousContent />
      </button>

      <SectionPaginationPagesList>
        {pagination.pages.map((page) => {
          return (
            <SectionPaginationPagesListItem key={page.indexNumber}>
              <button
                aria-current={page.isCurrent ? 'page' : false}
                aria-label={intl.formatMessage(
                  { id: 'shared.pagination.page' },
                  { page: page.displayNumber }
                )}
                className={classNames(
                  section.pagination.inMemory.link.enabled,
                  page.isCurrent ? section.pagination.inMemory.link.current : ''
                )}
                onClick={() => {
                  paginationActions.setPage(page.indexNumber)
                }}
              >
                {page.displayNumber}
              </button>
            </SectionPaginationPagesListItem>
          )
        })}
      </SectionPaginationPagesList>

      <button
        aria-label={nextLabel}
        aria-disabled={pagination.next.isDisabled}
        className={classNames(
          'flex items-center',
          pagination.next.isDisabled
            ? section.pagination.inMemory.link.disabled
            : section.pagination.inMemory.link.enabled
        )}
        onClick={() => {
          paginationActions.setPage(pagination.next.indexNumber)
        }}
      >
        <SectionPaginationNextContent />
      </button>
    </SectionPaginationContainer>
  )
}

export { SectionPaginationInMemory }
