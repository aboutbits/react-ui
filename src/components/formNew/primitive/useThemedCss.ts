import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { Mode } from '../../types'
import { FormTone, InputVariant } from '../types'

export function useInputCss({
  mode,
  variant,
  tone,
  disabled,
  withIconStart,
  withIconEnd,
}: {
  mode: Mode
  variant: InputVariant
  tone: FormTone
  disabled: boolean
  withIconStart: boolean
  withIconEnd: boolean
}) {
  const {
    formNew: { input: theme },
  } = useTheme()
  const modeCss = theme.modeVariant[mode]
  const modeVariantCss = modeCss[variant]

  return classNames(
    theme.base,
    disabled
      ? [modeCss.base.disabled, modeVariantCss.disabled]
      : [modeCss.base.tone[tone], modeVariantCss.tone[tone]],
    withIconStart && theme.withIconStart,
    withIconEnd && theme.withIconEnd
  )
}

export function useInputLabelCss({
  mode,
  tone,
  disabled,
}: {
  mode: Mode
  tone: FormTone
  disabled: boolean
}) {
  const {
    formNew: { inputLabel: theme },
  } = useTheme()

  return classNames(
    theme.base,
    disabled ? theme[mode].disabled : theme[mode].tone[tone]
  )
}

export function useInputMessageCss({
  mode,
  tone,
  disabled,
}: {
  mode: Mode
  tone: FormTone
  disabled: boolean
}) {
  const {
    formNew: { inputMessage: theme },
  } = useTheme()

  return classNames(
    theme.base,
    disabled ? theme[mode].disabled : theme[mode].tone[tone]
  )
}
