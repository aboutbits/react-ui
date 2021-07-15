import classnames from 'classnames'

export enum SectionBackground {
  white = 'white',
  gradient = 'gradient',
}

const backgroundStyle: Record<SectionBackground, string> = {
  [SectionBackground.white]: 'bg-white',
  [SectionBackground.gradient]:
    'bg-gradient-to-b from-white to-primary-100 border-t border-gray-300',
}

export const Section: React.FC<{ background?: SectionBackground }> = ({
  background = SectionBackground.white,
  children,
}) => (
  <section className={classnames(backgroundStyle[background], 'lg:shadow-md')}>
    {children}
  </section>
)

export const SectionContainerMultiColumn: React.FC<{
  className?: string
}> = ({ children, className = '' }) => (
  <div
    className={`grid xl:grid-cols-2 pt-5 pb-10 px-4 lg:px-5 xl:gap-x-5 gap-y-5 bg-gray-700 ${className}`}
  >
    {children}
  </div>
)

export const SectionListContainer: React.FC = ({ children }) => (
  <div className="space-y-px bg-gray-300">{children}</div>
)
