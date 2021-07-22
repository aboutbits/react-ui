import classNames from 'classnames'
import { ClassNameProps, ToneProps } from './type'

type LoadingBarProps = ToneProps & ClassNameProps

const LoadingBar: React.FC<LoadingBarProps> = ({
  className,
  backgroundColor = 'gray',
}) => (
  <div
    className={classNames(
      `rounded bg-${backgroundColor} animate-pulse`,
      className
    )}
  />
)

export { LoadingBar }
