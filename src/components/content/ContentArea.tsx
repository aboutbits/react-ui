import { useTheme } from '../../designSystem/theme/ThemeContext'

const ContentArea: React.FC = ({ children }) => {
  const { content } = useTheme()
  return <div className={content.area.base}>{children}</div>
}

export { ContentArea }
