import classNames from 'classnames'

const LoadingBar: React.FC<{ className?: string }> = ({
  className,
  children,
}) => <div className={classNames('rounded', className)}>{children}</div>

export { LoadingBar }
