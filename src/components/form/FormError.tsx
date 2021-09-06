import { useTheme } from '../../framework/theme/ThemeContext'
import { Alert, Tone } from '../alert'

export const FormError: React.FC = ({ children }) => {
  const { form } = useTheme()

  return (
    <Alert tone={Tone.critical} className={form.formError.base}>
      {children}
    </Alert>
  )
}
