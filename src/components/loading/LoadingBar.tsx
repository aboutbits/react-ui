import classNames from 'classnames'

type LoadingBarProps = {
  /**
   * Defines the tone of the button. Basically the color, so be sure to have the colors defined in Tailwind.
   */
  tone?: string
  /**
   * Adjusting individual the style with tailwind class names.
   */
  className?: string
}

const LoadingBar: React.FC<LoadingBarProps> = ({
  className,
  tone = 'gray',
}) => (
  <div className={classNames(`rounded bg-${tone} animate-pulse`, className)} />
)

export { LoadingBar }
