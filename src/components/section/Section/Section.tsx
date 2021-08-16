import classNames from 'classnames'
import { useTheme } from '../../../framework/theme/ThemeContext'
import { ClassNameProps } from '../../types'

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
