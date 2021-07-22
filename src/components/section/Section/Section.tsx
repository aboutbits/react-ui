import classNames from 'classnames'
import { ClassNameProps, ToneBackgroundProps } from '../type'

export type SectionProps = ToneBackgroundProps & ClassNameProps

export const Section: React.FC<SectionProps> = ({
  tone = 'white',
  className,
  children,
}) => (
  <section className={classNames(className, `lg:shadow-md bg-${tone}`)}>
    {children}
  </section>
)
