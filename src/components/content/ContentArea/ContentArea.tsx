import { useTheme } from '../../../framework'

const ContentArea: React.FC = ({ children }) => {
  const { content } = useTheme()
  return <div className={content.area.base}>{children}</div>
}

export { ContentArea }
