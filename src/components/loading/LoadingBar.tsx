import classNames from 'classnames'

export type ClassNameProps = {
  /**
   * Adjusting individual the style with any css class.
   */
  className?: string
}

type LoadingBarProps = ClassNameProps & {
  /**
   * Defines the background color of the bar. It uses the tailwind background notation `bg-${backgroundColor}` under the hood.
   */
  backgroundColor?: string
}

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
