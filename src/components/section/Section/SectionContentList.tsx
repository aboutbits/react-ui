import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionContentListProps = ClassNameProps

export const SectionContentList: React.FC<SectionContentListProps> = ({
  children,
  className,
}) => {
  const { section } = useTheme()
  return (
    <div className={classNames(section.contentList.base, className)}>
      {children}
    </div>
  )
}
