import classNames from 'classnames'

export type Props = {
  /**
   * Adjusting individual style with any CSS class.
   * */
  className?: string
}

export const Section: React.FC<Props> = ({ className, children }) => (
  <section className={classNames(className, 'lg:shadow-md bg-section')}>
    {children}
  </section>
)
