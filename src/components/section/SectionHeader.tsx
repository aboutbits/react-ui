import classNames from 'classnames'

const SectionHeader: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <div className={classNames('px-4 lg:px-5 pt-5 pb-3 bg-white', className)}>
    {children}
  </div>
)

const SectionTitle: React.FC<{ className?: string }> = ({
  className,
  children,
}) => (
  <h1 className={classNames(`text-xs font-bold uppercase`, className)}>
    {children}
  </h1>
)

export { SectionHeader, SectionTitle }
