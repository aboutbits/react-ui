import classNames from 'classnames'
import { calculatePagination, IndexType } from '@aboutbits/pagination'
import {
  LinkComponentProps,
  useLinkComponent,
  useTheme,
  useInternationalization,
} from '../../framework'
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

export type PaginationRouterProps = ClassNameProps & {
  /**
   * Defines the current page.
   **/
  page: number
  /**
   * Defines the number of elements per page.
   **/
  size: number
  /**
   * Defines the total number of elements.
   **/
  total: number
  /**
   * Calculate the href based on pageIndex and size.
   *
   * @param parameter
   **/
  linkProps?: (parameter: {
    pageIndex: number
    size: number
  }) => LinkComponentProps
  /**
   * Configure the pagination function.
   * For reference checkout: https://github.com/aboutbits/pagination/#usage
   **/
  config?: {
    indexType?: IndexType
    maxPages?: number
  }
}

export function PaginationRouter({
  page,
  size,
  total,
  config,
  className,
  linkProps = ({ pageIndex, size }) => {
    const params = new URLSearchParams(window.parent.location.search)
    params.set('page', String(pageIndex))
    params.set('size', String(size))
    return {
      href: window.parent.location.pathname + '?' + params.toString(),
    }
  },
}: PaginationRouterProps) {
  const { messages } = useInternationalization()

  const LinkComponent = useLinkComponent()
  const { pagination: paginationTheme } = useTheme()

  const pagination = calculatePagination(page, size, total, config)

  if (pagination === null) {
    return null
  }

  return (
    <PaginationContainer className={className}>
      <LinkComponent
        internal={true}
        {...linkProps({ pageIndex: pagination.previous.indexNumber, size })}
        aria-label={messages['pagination.prev']}
        aria-disabled={pagination.previous.isDisabled}
        className={classNames(
          paginationTheme.page.base,
          pagination.previous.isDisabled
            ? paginationTheme.page.disabled
            : paginationTheme.page.enabled,
        )}
      >
        <PaginationPreviousContent />
      </LinkComponent>

      <PaginationPagesList>
        {pagination.pages.map((page) => {
          return (
            <PaginationPagesListItem key={page.indexNumber}>
              <LinkComponent
                internal={true}
                {...linkProps({
                  pageIndex: page.indexNumber,
                  size,
                })}
                aria-current={page.isCurrent ? 'page' : false}
                aria-label={`${messages['pagination.page']} ${page.displayNumber.toString()}`}
                className={classNames(
                  paginationTheme.page.base,
                  paginationTheme.page.number,
                  paginationTheme.page.enabled,
                  page.isCurrent ? paginationTheme.page.current : '',
                )}
              >
                {page.displayNumber}
              </LinkComponent>
            </PaginationPagesListItem>
          )
        })}
      </PaginationPagesList>

      <LinkComponent
        internal={true}
        {...linkProps({
          pageIndex: pagination.next.indexNumber,
          size,
        })}
        aria-label={messages['pagination.next']}
        aria-disabled={pagination.next.isDisabled}
        className={classNames(
          paginationTheme.page.base,
          pagination.next.isDisabled
            ? paginationTheme.page.disabled
            : paginationTheme.page.enabled,
        )}
      >
        <PaginationNextContent />
      </LinkComponent>
    </PaginationContainer>
  )
}
