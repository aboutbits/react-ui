import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps

export const SectionContent: React.FC<Props> = ({ children, className }) => {
  const { section } = useTheme()
  return (
    <div className={classNames(section.content.base, className)}>
      {children}
    </div>
  )
}
