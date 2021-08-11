import { useTheme } from '../../../designSystem/theme/ThemeContext'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps

const HeaderRightArea: React.FC<Props> = ({ className, children }) => {
  const { header } = useTheme()
  return (
    <div className={className}>
      <div className={header.rightArea.base}>{children}</div>
    </div>
  )
}

export { HeaderRightArea }
