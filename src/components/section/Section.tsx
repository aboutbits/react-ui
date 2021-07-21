import ClassNames from 'classnames'

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
  <section className={ClassNames(className, `lg:shadow-md bg-${tone}`)}>
    {children}
  </section>
)

export const SectionContent: React.FC<{
  children?: any
  className?: string
  tone?: string
}> = ({ children, className, tone = 'gray' }) => (
  <div className={ClassNames(`pt-5 pb-10 px-4 lg:px-5 bg-${tone}`, className)}>
    {children}
  </div>
)

//TODO: add tone to args and classname
export const SectionContentTwoColumn: React.FC<SectionProps> = ({
  children,
  className = '',
}) => (
  <SectionContent
    className={ClassNames('grid xl:grid-cols-2 xl:gap-x-5 gap-y-5', className)}
  >
    {children}
  </SectionContent>
)

export const SectionContentList: React.FC = ({ children }) => (
  <div className="space-y-px bg-gray-300">{children}</div>
)

export default Section
