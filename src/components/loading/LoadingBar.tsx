import classNames from 'classnames'
import styles from './LoadingBar.module.css'

const LoadingBar: React.FC<{ className?: string }> = ({ className }) => (
  <div className={classNames('rounded', styles.loading, className)}></div>
)

export { LoadingBar }
