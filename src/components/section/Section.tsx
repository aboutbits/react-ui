import classNames from 'classnames'

export enum ActionSectionAlignment {
  end = 'end',
  center = 'center',
}

const alignmentStyles: Record<ActionSectionAlignment, string> = {
  [ActionSectionAlignment.end]: 'lg:justify-end',
  [ActionSectionAlignment.center]: 'lg:justify-center',
}

export const Section: React.FC<{
  className?: string
  tone?: string
}> = ({ children, className, tone = 'white' }) => (
  <section className={classNames(className, `lg:shadow-md bg-${tone}`)}>
    {children}
  </section>
)

export const SectionContainer: React.FC<{ className?: string; tone?: string }> =
  ({ children, className, tone = 'gray-700' }) => (
    <div
      className={classNames(`pt-5 pb-10 px-4 lg:px-5 bg-${tone}`, className)}
    >
      {children}
    </div>
  )

export const SectionContainerMultiColumn: React.FC<{
  className?: string
  tone?: string
}> = ({ children, className = '', tone = 'gray-700' }) => (
  <div
    className={`grid xl:grid-cols-2 pt-5 pb-10 px-4 lg:px-5 xl:gap-x-5 gap-y-5 bg-${tone} ${className}`}
  >
    {children}
  </div>
)

export const SectionListContainer: React.FC<{
  tone?: string
  className?: string
}> = ({ children, tone = 'gray-300', className }) => (
  <div className={classNames(className, `space-y-px bg-${tone}`)}>
    {children}
  </div>
)

export const ActionSection: React.FC<{
  alignment?: ActionSectionAlignment
  className?: string
}> = ({ alignment = ActionSectionAlignment.end, children, className }) => (
  <div
    className={classNames(
      'flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mx-4 lg:mx-0',
      alignmentStyles[alignment],
      className
    )}
  >
    {children}
  </div>
)
