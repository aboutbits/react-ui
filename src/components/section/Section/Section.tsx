import classNames from 'classnames'
import { ClassNameProps, ToneBackgroundProps } from '../type'

export type SectionProps = ToneBackgroundProps & ClassNameProps

export const Section: React.FC<SectionProps> = ({
  backgroundColor = 'white',
  className,
  children,
}) => {
  return (
    <section
      className={classNames(className, `lg:shadow-md bg-${backgroundColor}`)}
    >
      {children}
    </section>
  )
}
