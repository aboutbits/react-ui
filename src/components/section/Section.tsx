import classNames from 'classnames'

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
  <section className={classNames(backgroundStyle[background], 'lg:shadow-md')}>
    {children}
  </section>
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

export const SectionListContainer: React.FC<{ tone?: string }> = ({
  children,
  tone = 'gray-300',
}) => <div className={`space-y-px bg-${tone}`}>{children}</div>
