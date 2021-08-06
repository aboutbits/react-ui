import { stringify } from 'query-string'
import classNames from 'classnames'
import { calculatePagination, IndexType } from '@aboutbits/pagination'
import { useIntl } from 'react-intl'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  SectionPaginationContainer,
  SectionPaginationNextContent,
  SectionPaginationPagesList,
  SectionPaginationPagesListItem,
  SectionPaginationPreviousContent,
} from './SectionPagination'

const calculateLink = (
  routerUrl: string,
  routerQuery: string,
  page: number,
  size: number
): string => {
  const params = new URLSearchParams(routerQuery)

  params.set('page', String(page))
  params.set('size', String(size))

  return routerUrl + '?' + params.toString()
}

const SectionPaginationRouter: React.FC<{
  page: number
  size: number
  total: number
}> = ({ page, size, total }) => {
  const intl = useIntl()
  const router = useRouter()
  const routeQuery = stringify(router.query)
  const routerUrl = router.pathname

  const config = { indexType: IndexType.ZERO_BASED }
  const pagination = calculatePagination(page, size, total, config)

  if (pagination === null) return null

  const disabledLink = 'text-gray cursor-not-allowed pointer-events-none'
  const currentLink = 'text-black font-bold hover:underline'

  return (
    <SectionPaginationContainer>
      <Link
        href={calculateLink(
          routerUrl,
          routeQuery,
          pagination.previous.indexNumber,
          size
        )}
      >
        <a
          aria-label={intl.formatMessage({ id: 'shared.pagination.prev' })}
          aria-disabled={pagination.previous.isDisabled}
          role="previous-link"
          className={classNames(
            'flex items-center',
            pagination.previous.isDisabled ? disabledLink : 'hover:underline'
          )}
        >
          <SectionPaginationPreviousContent />
        </a>
      </Link>

      <SectionPaginationPagesList>
        {pagination.pages.map((page) => {
          return (
            <SectionPaginationPagesListItem key={page.indexNumber}>
              <Link
                href={calculateLink(
                  routerUrl,
                  routeQuery,
                  page.indexNumber,
                  size
                )}
              >
                <a
                  aria-current={page.isCurrent ? 'page' : false}
                  aria-label={intl.formatMessage(
                    { id: 'shared.pagination.page' },
                    { page: page.displayNumber }
                  )}
                  className={classNames(
                    page.isCurrent ? currentLink : 'text-gray hover:underline'
                  )}
                >
                  {page.displayNumber}
                </a>
              </Link>
            </SectionPaginationPagesListItem>
          )
        })}
      </SectionPaginationPagesList>

      <Link
        href={calculateLink(
          routerUrl,
          routeQuery,
          pagination.next.indexNumber,
          size
        )}
      >
        <a
          aria-label={intl.formatMessage({ id: 'shared.pagination.next' })}
          aria-disabled={pagination.next.isDisabled}
          role="next-link"
          className={classNames(
            'flex items-center',
            pagination.next.isDisabled ? disabledLink : 'hover:underline'
          )}
        >
          <SectionPaginationNextContent />
        </a>
      </Link>
    </SectionPaginationContainer>
  )
}

export { SectionPaginationRouter }
