import { useFormState, get } from 'react-hook-form'
import { Theme, useTheme } from '../../framework'
import { Mode } from '../types'
import { Variant } from './types'

export type CustomInputCssParameters = {
  mode: Mode
  variant: Variant
  disabled?: boolean
  hasError?: boolean
}

export type CustomInputCssFields = {
  inputCss: string
  labelCss: string
  errorCss: string
}

export function useCustomInputCss(
  name: string,
  parameters: Pick<CustomInputCssParameters, 'mode' | 'variant' | 'disabled'>
): CustomInputCssFields {
  const {
    form: { input, inputLabel, inputError },
  } = useTheme()
  const { errors } = useFormState({ name })

  const error = get(errors, name)

  const allParameters = {
    ...parameters,
    hasError: !!error,
  }

  const customInputCss = getCustomInputCss(input, allParameters)
  const customLabelCss = getCustomLabelCss(inputLabel, allParameters)
  const customErrorCss = getCustomErrorCss(inputError, allParameters)

  return {
    inputCss: input.base + ' ' + customInputCss,
    labelCss: inputLabel.base + ' ' + customLabelCss,
    errorCss: inputError.base + ' ' + customErrorCss,
  }
}

export function getCustomLabelCss(
  theme: Theme['form']['inputLabel'],
  parameters: Pick<CustomInputCssParameters, 'disabled' | 'mode' | 'hasError'>
) {
  if (parameters.disabled) {
    return theme[parameters.mode].disabled
  }

  if (parameters.hasError) {
    return theme[parameters.mode].error
  }

  return theme[parameters.mode].normal
}

export function getCustomInputCss(
  theme: Theme['form']['input'],
  parameters: CustomInputCssParameters
) {
  const modeCss = theme.modeVariant[parameters.mode]
  const modeVariantCss = modeCss[parameters.variant]

  if (parameters.disabled) {
    return modeCss.base.disabled + ' ' + modeVariantCss.disabled
  }

  if (parameters.hasError) {
    return modeCss.base.error + ' ' + modeVariantCss.error
  }

  return modeCss.base.normal + ' ' + modeVariantCss.normal
}

export function getCustomErrorCss(
  theme: Theme['form']['inputError'],
  parameters: Partial<CustomInputCssParameters> &
    Required<Pick<CustomInputCssParameters, 'mode'>>
) {
  return theme[parameters.mode].normal
}
