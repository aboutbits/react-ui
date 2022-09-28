import classNames from 'classnames'
import { ReactElement } from 'react'
import { TabProps, useTab } from './Tab'

export type TabButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TabProps

export function TabButton({
  name,
  active,
  className,
  children,
  ...props
}: TabButtonProps): ReactElement {
  const {
    ref,
    onClick,
    className: tabClassName,
  } = useTab<HTMLButtonElement>({ name, active })

  return (
    <button
      onClick={onClick}
      type="button"
      {...props}
      ref={ref}
      className={classNames(tabClassName, className)}
    >
      {children}
    </button>
  )
}
