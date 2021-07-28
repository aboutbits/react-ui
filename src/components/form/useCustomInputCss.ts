import { useField } from 'formik'

const useCustomInputCss = (
  fieldName: string,
  fieldDisabled = false
): { inputCss: string; labelCss: string } => {
  const [, meta] = useField({ name: fieldName })

  let customInputCss =
    'abui-input border block p-3 w-full focus:ring-0 appearance-none outline-none'
  let customLabelCss = 'abui-input-label'

  if (meta.touched && meta.error) {
    customInputCss += ' abui-input__error'
    customLabelCss += ' abui-input-label__error'
  }

  if (fieldDisabled) {
    customInputCss = customInputCss += ' abui-input__disabled'
    customLabelCss += ' abui-input-label__disabled'
  }

  return {
    inputCss: customInputCss,
    labelCss: customLabelCss,
  }
}

export { useCustomInputCss }
