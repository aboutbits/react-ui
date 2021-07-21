import classNames from 'classnames'

type SectionProps = {
  /**
   * Defines the tone of the button. Basically the color, so be sure to have the colors defined in Tailwind.
   * */
  tone?: string
  /**
   * Adjusting individual the style with tailwind class names.
   * */
  className?: string
}

type SectionContentTwoColumnProps = {
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

export const SectionContent: React.FC<SectionProps> = ({
  children,
  className,
  tone = 'gray-700',
}) => (
  <div className={classNames(`pt-5 pb-10 px-4 lg:px-5 bg-${tone}`, className)}>
    {children}
  </div>
)

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

export const SectionContentList: React.FC<SectionProps> = ({
  children,
  tone = 'gray-300',
  className = '',
}) => (
  <div className={classNames(`space-y-px bg-${tone}`, className)}>
    {children}
  </div>
)

export default Section
