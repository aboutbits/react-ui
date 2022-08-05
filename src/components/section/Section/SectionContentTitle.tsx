import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export const SectionContentTitle: React.FC<ClassNameProps> = ({
  children,
  className,
}) => {
  const { section } = useTheme()

  return (
    <span className={classNames(section.contentTitle.base, className)}>
      {children}
    </span>
  )
}
