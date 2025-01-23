import classNames from 'classnames'
import { ComponentProps, forwardRef } from 'react'
import { useTheme } from '../../framework'

export const TextButton = forwardRef<
  HTMLButtonElement,
  ComponentProps<'button'>
>(function TextButton({ className, ...props }, ref) {
  const { link } = useTheme()

  return (
    <button
      {...props}
      ref={ref}
      className={classNames(className, link.textLink.base)}
    />
  )
})
