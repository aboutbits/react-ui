import classNames from 'classnames'
import { ClassNameProps, ToneProps } from './type'

type LoadingBarProps = ToneProps & ClassNameProps

const LoadingBar: React.FC<LoadingBarProps> = ({
  className,
  tone = 'gray',
}) => (
  <div className={classNames(`rounded bg-${tone} animate-pulse`, className)} />
)

export { LoadingBar }
