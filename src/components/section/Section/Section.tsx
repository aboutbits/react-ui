import classNames from 'classnames'
import { ClassNameProps } from '../type'

export type SectionProps = ClassNameProps

export const Section: React.FC<SectionProps> = ({ className, children }) => (
  <section className={classNames(className, 'lg:shadow-md bg-section')}>
    {children}
  </section>
)
