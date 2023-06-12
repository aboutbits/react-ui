import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { Mode, Size } from '../../types'
import { FormTone, FormVariant } from '../types'
import { CheckboxLayout } from './Checkbox'
import { FieldSetIndent } from './Fieldset'

export function useInputCss({
  mode,
  variant,
  tone,
  disabled,
  withIconStart,
  withIconEnd,
}: {
  mode: Mode
  variant: FormVariant
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

export function useTextAreaCss({
  mode,
  variant,
  tone,
  disabled,
}: {
  mode: Mode
  variant: FormVariant
  tone: FormTone
  disabled: boolean
}) {
  return useInputCss({
    mode,
    variant,
    tone,
    disabled,
    withIconStart: false,
    withIconEnd: false,
  })
}

export function useSelectCss({
  mode,
  variant,
  tone,
  disabled,
}: {
  mode: Mode
  variant: FormVariant
  tone: FormTone
  disabled: boolean
}) {
  const {
    formNew: { select: theme },
  } = useTheme()

  const inputCss = useInputCss({
    mode,
    variant,
    tone,
    disabled,
    withIconStart: false,
    withIconEnd: false,
  })

  return classNames(theme.base, inputCss)
}

export function useCheckboxCss({
  layout,
  disabled,
  applyInputHeight,
  size,
}: {
  layout: CheckboxLayout
  disabled: boolean
  applyInputHeight: boolean
  size: Size
}) {
  const {
    formNew: { checkbox: theme },
  } = useTheme()

  return classNames(
    theme.base,
    theme.layout[layout],
    applyInputHeight && [theme.inputHeight.base, theme.inputHeight.size[size]],
    disabled ? theme.disabled : theme.normal
  )
}

export function useCheckboxLabelCss({
  mode,
  size,
  disabled,
}: {
  mode: Mode
  size: Size
  disabled: boolean
}) {
  const {
    formNew: {
      checkbox: { label: theme },
    },
  } = useTheme()
  return classNames(
    theme.base,
    theme.size[size],
    disabled
      ? theme.mode[mode].disabled
      : theme.mode[mode][disabled ? 'disabled' : 'normal']
  )
}

export function useCheckboxInputCss() {
  const {
    formNew: {
      checkbox: { input: theme },
    },
  } = useTheme()

  return classNames(theme.base)
}

export function useFieldsetCss({ indent }: { indent: FieldSetIndent }) {
  const {
    formNew: { fieldset: theme },
  } = useTheme()

  return classNames(theme.container.indent[indent])
}

export function useFieldsetLegendCss({
  mode,
  tone,
  disabled,
  indent,
}: {
  mode: Mode
  tone: FormTone
  disabled: boolean
  indent: FieldSetIndent
}) {
  const {
    formNew: {
      fieldset: { legend: theme },
    },
  } = useTheme()

  const labeCss = useInputLabelCss({
    mode,
    tone,
    disabled,
  })

  const labelCssWithoutMarginLeft = getClassNameWithoutMarginLeft(labeCss)

  return classNames(labelCssWithoutMarginLeft, theme.indent[indent])
}

export function getClassNameWithoutMarginLeft(className: string): string {
  return className.replace(/(^|\s)ml-\w+(?=\s|$)/, '')
}
