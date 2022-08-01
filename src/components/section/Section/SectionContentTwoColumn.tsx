import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export const SectionContentTwoColumn: React.FC<ClassNameProps> = ({
  children,
  className,
}) => {
  const { section } = useTheme()
  return (
    <div className={classNames(section.contentTwoColumn.base, className)}>
      {children}
    </div>
  )
}
