import classNames from 'classnames'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

type Props = ClassNameProps

export const SectionContent: React.FC<Props> = ({ children, className }) => {
  const { section } = useTheme()
  return (
    <div className={classNames(section.sectionContent.base, className)}>
      {children}
    </div>
  )
}
