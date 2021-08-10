import classNames from 'classnames'
import { useTheme } from '../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../types'

const DrawerContainer: React.FC<ClassNameProps> = ({ children, className }) => {
  const { menu } = useTheme()
  return (
    <div
      className={classNames(
        className,
        menu.container.base,
        menu.container.normal
      )}
    >
      {children}
    </div>
  )
}

export { DrawerContainer }
