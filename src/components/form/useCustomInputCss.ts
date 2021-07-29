import { useField } from 'formik'

const theme = {
  input: {
    base: 'border block p-3 w-full focus:ring-0 appearance-none outline-none',
    default:
      'border-white focus:border-primary-400 bg-transparent text-white placeholder-gray-100',
    error: 'border-critical focus:border-critical',
    disabled: 'border-gray text-gray bg-gray-100',
  },
  inputLabel: {
    base: 'block pb-1 font-bold text-xs',
    default: 'text-white',
    error: 'text-critical',
    disabled: 'text-gray',
  },
}

const useCustomInputCss = (
  fieldName: string,
  fieldDisabled = false
): { inputCss: string; labelCss: string } => {
  const [, meta] = useField({ name: fieldName })

  let customInputCss = theme.input.default
  let customLabelCss = theme.inputLabel.default

  if (meta.touched && meta.error) {
    customInputCss = theme.input.error
    customLabelCss = theme.inputLabel.error
  }

  if (fieldDisabled) {
    customInputCss = theme.input.disabled
    customLabelCss = theme.inputLabel.disabled
  }

  return {
    inputCss: theme.input.base + ' ' + customInputCss,
    labelCss: theme.inputLabel.base + ' ' + customLabelCss,
  }
}

export { useCustomInputCss }
