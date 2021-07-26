import classNames from 'classnames'

type LoadingBarProps = {
  /**
   * Adjusting individual the style with any css class.
   */
  className?: string
}

const LoadingBar: React.FC<LoadingBarProps> = ({ className }) => (
  <div
    className={classNames('rounded animate-pulse bg-loading-bar', className)}
  />
)

export { LoadingBar }
