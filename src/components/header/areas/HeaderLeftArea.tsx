import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

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
