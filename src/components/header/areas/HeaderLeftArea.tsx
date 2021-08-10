import { useTheme } from '../../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps

const HeaderLeftArea: React.FC<Props> = ({ className, children }) => {
  const { header } = useTheme()
  return (
    <div className={className}>
      <div className={header.leftArea.base}>{children}</div>
    </div>
  )
}

export { HeaderLeftArea }
