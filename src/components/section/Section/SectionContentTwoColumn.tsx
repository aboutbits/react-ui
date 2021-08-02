import classNames from 'classnames'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'
import { SectionContent } from './SectionContent'

export const SectionContentTwoColumn: React.FC<ClassNameProps> = ({
  children,
  className,
}) => {
  const { section } = useTheme()
  return (
    <SectionContent
      className={classNames(section.contentTwoColumn.base, className)}
    >
      {children}
    </SectionContent>
  )
}
