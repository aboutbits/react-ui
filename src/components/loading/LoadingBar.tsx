import classNames from 'classnames'

const LoadingBar: React.FC<{ className?: string; tone?: string }> = ({
  className,
  tone = 'gray',
}) => (
  <div className={classNames(`rounded bg-${tone} animate-pulse`, className)} />
)

export { LoadingBar }
