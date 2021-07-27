import { useField } from 'formik'

const useCustomInputCss = (
  fieldName: string,
  fieldDisabled = false
): { inputCss: string; labelCss: string } => {
  const [, meta] = useField({ name: fieldName })
  const genericInputCss =
    'border block p-3 w-full focus:ring-0 appearance-none outline-none '

  let customInputCss =
    'border-input focus:border-input bg-input text-input placeholder-input'
  let customLabelCss = 'text-input-label'

  if (meta.touched && meta.error) {
    customInputCss =
      'border-input-error focus:border-input-error bg-input-error'
    customLabelCss = 'text-input-label-error'
  }

  if (fieldDisabled) {
    customInputCss =
      'text-input-disabled bg-input-disabled border-input-disabled'
    customLabelCss = 'text-input-label-disabled'
  }

  return {
    inputCss: genericInputCss + customInputCss,
    labelCss: customLabelCss,
  }
}

export { useCustomInputCss }
