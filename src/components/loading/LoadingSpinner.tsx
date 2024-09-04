import IconProgressActivityRounded from '@aboutbits/react-material-icons/dist/IconProgressActivityRounded'
import classNames from 'classnames'
import { useTheme } from '../../framework'
import { IconProps } from '../types'

export function LoadingSpinner({ className, ...props }: IconProps) {
  const { loading } = useTheme()
  return (
    <IconProgressActivityRounded
      className={classNames(loading.iconSpinner.base, className)}
      {...props}
    />
  )
}
