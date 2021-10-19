import { useField } from 'formik'
import { useTheme } from '../../framework'
import { Mode } from '../types'

const useCustomInputCss = (
  fieldName: string,
  fieldDisabled = false,
  fieldMode = Mode.light
): { inputCss: string; labelCss: string } => {
  const [, meta] = useField({ name: fieldName })
  const {
    form: { input, inputLabel },
  } = useTheme()

  let customInputCss = input[fieldMode].normal
  let customLabelCss = inputLabel[fieldMode].normal

  if (meta.touched && meta.error) {
    customInputCss = input[fieldMode].error
    customLabelCss = inputLabel[fieldMode].error
  }

  if (fieldDisabled) {
    customInputCss = input[fieldMode].disabled
    customLabelCss = inputLabel[fieldMode].disabled
  }

  return {
    inputCss: input.base + ' ' + customInputCss,
    labelCss: inputLabel.base + ' ' + customLabelCss,
  }
}

export { useCustomInputCss }
