import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps

export const SectionFilter: React.FC<Props> = ({ className, children }) => {
  const { section } = useTheme()
  return (
    <div
      className={classNames(
        section.filter.container.base,
        section.filter.container.normal,
        className
      )}
    >
      {children}
    </div>
  )
}
