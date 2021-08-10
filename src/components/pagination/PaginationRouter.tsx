import classNames from 'classnames'
import { calculatePagination, IndexType } from '@aboutbits/pagination'
import { useIntl } from 'react-intl'
import { useLinkComponent } from '../../designSystem/router/LinkComponentContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
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
   * Calculate the href based on pageIndex and size.
   *
   * @param parameter
   */
  linkProps: (parameter: { pageIndex: number; size: number }) => {
    href: string
  }
  /**
   * Defines whether the pagination is zero or one based.
   */
  indexType?: IndexType
}

const PaginationRouter: React.FC<Props> = ({
  page,
  size,
  total,
  linkProps,
  indexType = IndexType.ZERO_BASED,
}) => {
  const intl = useIntl()

  const LinkComponent = useLinkComponent()
  const { section } = useTheme()

  const pagination = calculatePagination(page, size, total, { indexType })

  if (pagination === null) return null

  return (
    <PaginationContainer>
      <LinkComponent
        {...linkProps({ pageIndex: pagination.previous.indexNumber, size })}
        aria-label={intl.formatMessage({ id: 'shared.pagination.prev' })}
        aria-disabled={pagination.previous.isDisabled}
        role="previous-link"
        className={classNames(
          section.pagination.page.base,
          pagination.previous.isDisabled
            ? section.pagination.router.link.disabled
            : 'hover:underline'
        )}
      >
        <PaginationPreviousContent />
      </LinkComponent>

      <PaginationPagesList>
        {pagination.pages.map((page) => {
          return (
            <PaginationPagesListItem key={page.indexNumber}>
              <LinkComponent
                {...linkProps({
                  pageIndex: page.indexNumber,
                  size,
                })}
                aria-current={page.isCurrent ? 'page' : false}
                aria-label={intl.formatMessage(
                  { id: 'shared.pagination.page' },
                  { page: page.displayNumber }
                )}
                className={classNames(
                  section.pagination.page.base,
                  page.isCurrent
                    ? section.pagination.router.link.current
                    : 'text-gray hover:underline'
                )}
              >
                {page.displayNumber}
              </LinkComponent>
            </PaginationPagesListItem>
          )
        })}
      </PaginationPagesList>

      <LinkComponent
        {...linkProps({
          pageIndex: pagination.next.indexNumber,
          size,
        })}
        aria-label={intl.formatMessage({ id: 'shared.pagination.next' })}
        aria-disabled={pagination.next.isDisabled}
        role="next-link"
        className={classNames(
          section.pagination.page.base,
          pagination.next.isDisabled
            ? section.pagination.router.link.disabled
            : 'hover:underline'
        )}
      >
        <PaginationNextContent />
      </LinkComponent>
    </PaginationContainer>
  )
}

export { PaginationRouter }
