import classNames from 'classnames'

export enum ActionSectionVariant {
  right = 'right',
  center = 'center',
}

const variantStyles: Record<ActionSectionVariant, string> = {
  [ActionSectionVariant.right]: 'lg:justify-end',
  [ActionSectionVariant.center]: 'lg:justify-center',
}

export const Section: React.FC<{
  className?: string
  tone?: string
}> = ({ children, className, tone = 'white' }) => (
  <section className={classNames(className, `lg:shadow-md bg-${tone}`)}>
    {children}
  </section>
)

//TODO: write storybook
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

//TODO: write storybook
export const ActionSection: React.FC<{ variant?: ActionSectionVariant }> = ({
  variant = ActionSectionVariant.right,
  children,
}) => (
  <div
    className={classNames(
      'flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mx-4 lg:mx-0',
      variantStyles[variant]
    )}
  >
    {children}
  </div>
)
