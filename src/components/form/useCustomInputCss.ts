import { useField } from 'formik'
import { useTheme } from '../../theme/ThemeProvider'

const useCustomInputCss = (
  fieldName: string,
  fieldDisabled = false
): { inputCss: string; labelCss: string } => {
  const [, meta] = useField({ name: fieldName })
  const {
    form: { input, inputLabel },
  } = useTheme()

  let customInputCss = input.normal
  let customLabelCss = inputLabel.normal

  if (meta.touched && meta.error) {
    customInputCss = input.error
    customLabelCss = inputLabel.error
  }

  if (fieldDisabled) {
    customInputCss = input.disabled
    customLabelCss = inputLabel.disabled
  }

  return {
    inputCss: input.base + ' ' + customInputCss,
    labelCss: inputLabel.base + ' ' + customLabelCss,
  }
}

export { useCustomInputCss }
