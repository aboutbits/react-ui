import { useField } from 'formik'
import { useTheme } from '../../framework'
import { Mode } from '../types'
import { Variant } from './types'

const useCustomInputCss = (
  fieldName: string,
  fieldDisabled = false,
  fieldMode = Mode.light,
  variant = Variant.ghost
): { inputCss: string; labelCss: string; errorCss: string } => {
  const [, meta] = useField({ name: fieldName })
  const {
    form: { input, inputLabel, inputError },
  } = useTheme()

  const inputModeCss = input.modeVariant[fieldMode]

  let customInputCss =
    inputModeCss.base.normal + ' ' + inputModeCss[variant].normal
  let customLabelCss = inputLabel[fieldMode].normal
  const customErrorCss = inputError[fieldMode].normal

  if (meta.touched && meta.error) {
    customInputCss = inputModeCss.base.error + ' ' + inputModeCss[variant].error
    customLabelCss = inputLabel[fieldMode].error
  }

  if (fieldDisabled) {
    customInputCss =
      inputModeCss.base.disabled + ' ' + inputModeCss[variant].disabled
    customLabelCss = inputLabel[fieldMode].disabled
  }

  return {
    inputCss: input.base + ' ' + customInputCss,
    labelCss: inputLabel.base + ' ' + customLabelCss,
    errorCss: inputError.base + ' ' + customErrorCss,
  }
}

export { useCustomInputCss }
