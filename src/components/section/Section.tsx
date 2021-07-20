import classnames from 'classnames'

export enum SectionBackground {
  white = 'white',
  gradient = 'gradient',
}

export type SectionProps = { background?: SectionBackground }

const backgroundStyle: Record<SectionBackground, string> = {
  [SectionBackground.white]: 'bg-white',
  [SectionBackground.gradient]:
    'bg-gradient-to-b from-white to-primary-100 border-t border-gray-300',
}

export const Section: React.FC<SectionProps> = ({
  background = SectionBackground.white,
  children,
}) => (
  <section className={classnames(backgroundStyle[background], 'lg:shadow-md')}>
    {children}
  </section>
)

export const SectionContent: React.FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <div className={classnames('pt-5 pb-10 px-4 lg:px-5 bg-gray-700', className)}>
    {children}
  </div>
)

export const SectionContentTwoColumn: React.FC<{
  className?: string
}> = ({ children, className = '' }) => (
  <SectionContent
    className={classnames('grid xl:grid-cols-2 xl:gap-x-5 gap-y-5', className)}
  >
    {children}
  </SectionContent>
)

export const SectionContentList: React.FC = ({ children }) => (
  <div className="space-y-px bg-gray-300">{children}</div>
)

//TODO: check were this file is now
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
