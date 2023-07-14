import { calculatePagination, IndexType } from '@aboutbits/pagination'
import classNames from 'classnames'
import { ReactNode } from 'react'
import { useInternationalization, useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { PaginationContainer } from './PaginationContainer'
import {
  PaginationPagesList,
  PaginationPagesListItem,
} from './PaginationPagesList'
import {
  PaginationNextContent,
  PaginationPreviousContent,
} from './PaginationPreviousNextContent'

export type PaginationInMemoryProps = ClassNameProps & {
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
   * Defines the action to change the page.
   **/
  onChangePage: (page: number) => void
  /**
   * Configure the pagination function.
   * For reference checkout: https://github.com/aboutbits/pagination/#usage
   **/
  config?: {
    indexType?: IndexType
    maxPages?: number
  }
}

export type SectionPaginationInMemoryButtonProps = {
  'aria-label': string
  'aria-current'?: boolean | 'page'
  disabled: boolean
  pageIndex: number
  children?: ReactNode
} & Pick<PaginationInMemoryProps, 'onChangePage'> &
  ClassNameProps

export function SectionPaginationInMemoryButton({
  disabled,
  onChangePage,
  pageIndex,
  className,
  children,
  ...props
}: SectionPaginationInMemoryButtonProps) {
  const { pagination: paginationTheme } = useTheme()
  return (
    <button
      aria-disabled={disabled}
      disabled={disabled}
      className={classNames(
        paginationTheme.page.base,
        disabled ? paginationTheme.page.disabled : paginationTheme.page.enabled,
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

export function PaginationInMemory({
  page,
  size,
  total,
  onChangePage,
  config,
  className,
}: PaginationInMemoryProps) {
  const { formatMessage } = useInternationalization()
  const { pagination: paginationTheme } = useTheme()
  const pagination = calculatePagination(page, size, total, config)

  if (pagination === null) return null

  return (
    <PaginationContainer className={className}>
      <SectionPaginationInMemoryButton
        aria-label={formatMessage('pagination.prev')}
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
                aria-label={`${formatMessage('pagination.page')} ${
                  page.displayNumber
                }`}
                className={classNames(
                  paginationTheme.page.number,
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
        aria-label={formatMessage('pagination.next')}
        disabled={pagination.next.isDisabled}
        onChangePage={onChangePage}
        pageIndex={pagination.next.indexNumber}
      >
        <PaginationNextContent />
      </SectionPaginationInMemoryButton>
    </PaginationContainer>
  )
}
