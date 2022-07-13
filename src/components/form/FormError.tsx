import { useTheme } from '../../framework'
import { Tone } from '../types'
import { Alert } from '../alert'

export const FormError: React.FC = ({ children }) => {
  const { form } = useTheme()

  return (
    <Alert tone={Tone.critical} className={form.formError.base}>
      {children}
    </Alert>
  )
}
