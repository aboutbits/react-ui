import classNames from 'classnames'
import { useTheme } from '../../../framework/theme/ThemeContext'
import { ClassNameProps } from '../../types'

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
