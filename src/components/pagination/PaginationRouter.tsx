import classNames from 'classnames'
import { calculatePagination, IndexType } from '@aboutbits/pagination'
import {
  LinkComponentProps,
  useLinkComponent,
} from '../../framework/router/LinkComponentContext'
import { useTheme } from '../../framework/theme/ThemeContext'
import { ClassNameProps } from '../types'
import { useInternationalization } from '../../framework/internationalization/InternationalizationContext'
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
  linkProps: (parameter: {
    pageIndex: number
    size: number
  }) => LinkComponentProps
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
  const internationalization = useInternationalization()

  const LinkComponent = useLinkComponent()
  const { pagination: paginationTheme } = useTheme()

  const pagination = calculatePagination(page, size, total, config)

  if (pagination === null) return null

  return (
    <PaginationContainer className={className}>
      <LinkComponent
        internal={true}
        {...linkProps({ pageIndex: pagination.previous.indexNumber, size })}
        aria-label={internationalization.translate('shared.pagination.prev')}
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
                internal={true}
                {...linkProps({
                  pageIndex: page.indexNumber,
                  size,
                })}
                aria-current={page.isCurrent ? 'page' : false}
                aria-label={internationalization.translate(
                  'shared.pagination.page',
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
        internal={true}
        {...linkProps({
          pageIndex: pagination.next.indexNumber,
          size,
        })}
        aria-label={internationalization.translate('shared.pagination.next')}
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
