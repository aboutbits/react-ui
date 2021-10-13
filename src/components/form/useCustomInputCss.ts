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

  let customInputCss =
    fieldMode === Mode.light ? input.light.normal : input.dark.normal
  let customLabelCss =
    fieldMode === Mode.light ? inputLabel.light.normal : inputLabel.dark.normal

  if (meta.touched && meta.error) {
    customInputCss =
      fieldMode === Mode.light ? input.light.error : input.dark.error
    customLabelCss =
      fieldMode === Mode.light ? inputLabel.light.error : inputLabel.dark.error
  }

  if (fieldDisabled) {
    customInputCss =
      fieldMode === Mode.light ? input.light.disabled : input.dark.disabled
    customLabelCss =
      fieldMode === Mode.light
        ? inputLabel.light.disabled
        : inputLabel.dark.disabled
  }

  return {
    inputCss: input.base + ' ' + customInputCss,
    labelCss: inputLabel.base + ' ' + customLabelCss,
  }
}

export { useCustomInputCss }
