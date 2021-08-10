import classNames from 'classnames'
import { calculatePagination, IndexType } from '@aboutbits/pagination'
import { useIntl } from 'react-intl'
import { useLinkComponent } from '../../designSystem/router/LinkComponentContext'
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

type Props = ClassNameProps & {
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
   * Configure the pagination function.
   * For reference checkout: https://github.com/aboutbits/pagination/#usage
   */
  config?: {
    indexType?: IndexType
    maxPages?: number
  }
}

const PaginationRouter: React.FC<Props> = ({
  page,
  size,
  total,
  linkProps,
  config,
  className,
}) => {
  const intl = useIntl()

  const LinkComponent = useLinkComponent()
  const { pagination: paginationTheme } = useTheme()

  const pagination = calculatePagination(page, size, total, config)

  if (pagination === null) return null

  return (
    <PaginationContainer className={className}>
      <LinkComponent
        {...linkProps({ pageIndex: pagination.previous.indexNumber, size })}
        aria-label={intl.formatMessage({ id: 'shared.pagination.prev' })}
        aria-disabled={pagination.previous.isDisabled}
        role="previous-link"
        className={classNames(
          paginationTheme.page.base,
          pagination.previous.isDisabled
            ? paginationTheme.page.disabled
            : paginationTheme.page.enabled
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
                  paginationTheme.page.base,
                  paginationTheme.page.normal,
                  paginationTheme.page.enabled,
                  page.isCurrent ? paginationTheme.page.current : ''
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
          paginationTheme.page.base,
          pagination.next.isDisabled
            ? paginationTheme.page.disabled
            : paginationTheme.page.enabled
        )}
      >
        <PaginationNextContent />
      </LinkComponent>
    </PaginationContainer>
  )
}

export { PaginationRouter }
