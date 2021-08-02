import classNames from 'classnames'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

type Props = ClassNameProps

export const SectionContent: React.FC<Props> = ({ children, className }) => {
  const { section } = useTheme()
  return (
    <div
      className={classNames(
        section.content.base,
        section.content.normal,
        className
      )}
    >
      {children}
    </div>
  )
}
