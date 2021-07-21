import classNames from 'classnames'

export type SectionProps = {
  /**
   * Defines the tone of the button. Basically the color, so be sure to have the colors defined in Tailwind.
   * */
  tone?: string
  /**
   * Adjusting individual the style with tailwind class names.
   * */
  className?: string
}

export const Section: React.FC<SectionProps> = ({
  tone = 'white',
  className,
  children,
}) => (
  <section className={classNames(className, `lg:shadow-md bg-${tone}`)}>
    {children}
  </section>
)
