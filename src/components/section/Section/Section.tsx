import classNames from 'classnames'

export type SectionProps = {
  /**
   * Adjusting individual style with any CSS class.
   * */
  className?: string
}

export const Section: React.FC<SectionProps> = ({ className, children }) => (
  <section className={classNames(className, 'lg:shadow-md bg-section')}>
    {children}
  </section>
)
