import classNames from 'classnames'
import { ClassNameProps, BackgroundColorProps } from '../type'

export type SectionProps = BackgroundColorProps & ClassNameProps

export const Section: React.FC<SectionProps> = ({
  backgroundColor = 'white',
  className,
  children,
}) => (
  <section
    className={classNames(className, `lg:shadow-md bg-${backgroundColor}`)}
  >
    {children}
  </section>
)
