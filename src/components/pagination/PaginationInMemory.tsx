import classNames from 'classnames'
import { calculatePagination, IndexType } from '@aboutbits/pagination'
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

export type PaginationInMemoryProps = ClassNameProps & {
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
   * Configure the pagination function.
   * For reference checkout: https://github.com/aboutbits/pagination/#usage
   */
  config?: {
    indexType?: IndexType
    maxPages?: number
  }
}

type SectionPaginationInMemoryButtonProps = {
  'aria-label': string
  'aria-current'?: boolean | 'page'
  disabled: boolean
  pageIndex: number
} & Pick<PaginationInMemoryProps, 'onChangePage'> &
  ClassNameProps

const SectionPaginationInMemoryButton: React.FC<SectionPaginationInMemoryButtonProps> =
  ({ disabled, onChangePage, pageIndex, className, children, ...props }) => {
    const { pagination: paginationTheme } = useTheme()
    return (
      <button
        aria-disabled={disabled}
        disabled={disabled}
        className={classNames(
          paginationTheme.page.base,
          disabled
            ? paginationTheme.page.disabled
            : paginationTheme.page.enabled,
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

const PaginationInMemory: React.FC<PaginationInMemoryProps> = ({
  page,
  size,
  total,
  onChangePage,
  config,
  className,
}) => {
  const internationalization = useInternationalization()
  const { pagination: paginationTheme } = useTheme()
  const pagination = calculatePagination(page, size, total, config)

  if (pagination === null) return null

  return (
    <PaginationContainer className={className}>
      <SectionPaginationInMemoryButton
        aria-label={internationalization.translate('shared.pagination.prev')}
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
                aria-label={internationalization.translate(
                  'shared.pagination.page',
                  { page: page.displayNumber }
                )}
                className={classNames(
                  paginationTheme.page.normal,
                  page.isCurrent ? paginationTheme.page.current : ''
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
        aria-label={internationalization.translate('shared.pagination.next')}
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
