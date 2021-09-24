import classNames from 'classnames'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../framework'

type Props = ClassNameProps

export const SectionFooter: React.FC<Props> = ({ className, children }) => {
  const { section } = useTheme()
  return (
    <div
      className={classNames(
        className,
        section.footer.base,
        section.footer.normal
      )}
    >
      {children}
    </div>
  )
}
