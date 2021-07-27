import classNames from 'classnames'
import { ClassNameProps } from '../../types'

export type Props = ClassNameProps

export const Section: React.FC<Props> = ({ className, children }) => (
  <section className={classNames(className, 'lg:shadow-md bg-section')}>
    {children}
  </section>
)
