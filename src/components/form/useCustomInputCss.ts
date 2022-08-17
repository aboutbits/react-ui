import { FieldMetaProps, useField } from 'formik'
import { Theme, useTheme } from '../../framework'
import { Mode } from '../types'
import { Variant } from './types'

const useCustomInputCss = (
  name: string,
  disabled = false,
  mode = Mode.light,
  variant = Variant.ghost
): { inputCss: string; labelCss: string; errorCss: string } => {
  const [, meta] = useField({ name: name })
  const {
    form: { input, inputLabel, inputError },
  } = useTheme()

  const customInputCss = getCustomInputCss(input, meta, disabled, mode, variant)
  const customLabelCss = getCustomLabelCss(inputLabel, meta, disabled, mode)
  const customErrorCss = getCustomErrorCss(inputLabel, mode)

  return {
    inputCss: input.base + ' ' + customInputCss,
    labelCss: inputLabel.base + ' ' + customLabelCss,
    errorCss: inputError.base + ' ' + customErrorCss,
  }
}

export function getCustomLabelCss(
  theme: Theme['form']['inputLabel'],
  meta: FieldMetaProps<unknown>,
  disabled: boolean,
  mode: Mode
) {
  if (disabled) {
    return theme[mode].disabled
  }

  if (meta.touched && meta.error) {
    return theme[mode].error
  }

  return theme[mode].normal
}

export function getCustomInputCss(
  theme: Theme['form']['input'],
  meta: FieldMetaProps<unknown>,
  disabled: boolean,
  mode: Mode,
  variant: Variant
) {
  const modeCss = theme.modeVariant[mode]
  const modeVariantCss = modeCss[variant]

  if (disabled) {
    return modeCss.base.disabled + ' ' + modeVariantCss.disabled
  }

  if (meta.touched && meta.error) {
    return modeCss.base.error + ' ' + modeVariantCss.error
  }

  return modeCss.base.normal + ' ' + modeVariantCss.normal
}

export function getCustomErrorCss(
  theme: Theme['form']['inputError'],
  mode: Mode
) {
  return theme[mode].normal
}

export { useCustomInputCss }
