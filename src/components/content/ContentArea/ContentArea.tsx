import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export const ContentArea: React.FC<ClassNameProps> = ({
  className,
  children,
}) => {
  const { content } = useTheme()
  return (
    <div className={classNames(content.area.base, className)}>{children}</div>
  )
}
