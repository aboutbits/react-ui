import IconProgressActivityRounded from '@aboutbits/react-material-icons/dist/IconProgressActivityRounded'
import classNames from 'classnames'
import { useTheme } from '../../framework'
import { IconProps } from '../types'

/**
 *
 * The LoadingSpinner component displays a spinning icon to indicate something is loading.
 * It uses the ```IconProps``` and therefore can be used in the same way as Icons.
 */
export function LoadingSpinner({ className, ...props }: IconProps) {
  const { loading } = useTheme()
  return (
    <IconProgressActivityRounded
      className={classNames(loading.iconSpinner.base, className)}
      {...props}
    />
  )
}
