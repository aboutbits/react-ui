import classNames from 'classnames'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

export type Props = ClassNameProps

export const Section: React.FC<Props> = ({ className, children }) => {
  const { section } = useTheme()
  return (
    <section
      className={classNames(
        className,
        section.section.base,
        section.section.normal
      )}
    >
      {children}
    </section>
  )
}
