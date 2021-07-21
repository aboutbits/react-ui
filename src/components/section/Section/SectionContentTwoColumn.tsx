import classNames from 'classnames'
import { SectionContent } from './SectionContent'

export type SectionContentTwoColumnProps = {
  /**
   * Adjusting individual the style with any CSS class.
   * */
  className?: string
}

export const SectionContentTwoColumn: React.FC<SectionContentTwoColumnProps> =
  ({ children, className = '' }) => (
    <SectionContent
      className={classNames(
        'grid xl:grid-cols-2 xl:gap-x-5 gap-y-5',
        className
      )}
    >
      {children}
    </SectionContent>
  )
