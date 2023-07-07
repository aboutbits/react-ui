import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { Mode, Size } from '../../types'
import { FormTone, FormVariant } from '../types'
import { CheckboxLayout } from './Checkbox'
import { FieldSetIndent } from './Fieldset'
import { ToggleSwitchLayout } from './ToggleSwitch'

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
    form: { input: theme },
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
  showRequired,
}: {
  mode: Mode
  tone: FormTone
  disabled: boolean
  showRequired: boolean | undefined
}) {
  const {
    form: { inputLabel: theme },
  } = useTheme()

  return classNames(
    theme.base,
    disabled ? theme[mode].disabled : theme[mode].tone[tone],
    showRequired && theme[mode].required
  )
}

export function useInputMessageCss({
  mode,
  tone,
  disabled,
  noIndent,
}: {
  mode: Mode
  tone: FormTone
  disabled: boolean
  noIndent?: boolean
}) {
  const {
    form: { inputMessage: theme },
  } = useTheme()

  return classNames(
    theme.base,
    !noIndent && theme.indent,
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
    form: { select: theme },
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
    form: { checkbox: theme },
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
  showRequired,
}: {
  mode: Mode
  size: Size
  disabled: boolean
  showRequired: boolean | undefined
}) {
  const {
    form: {
      checkbox: { label: theme },
    },
  } = useTheme()
  return classNames(
    theme.base,
    theme.size[size],
    disabled
      ? theme.mode[mode].disabled
      : theme.mode[mode][disabled ? 'disabled' : 'normal'],
    showRequired && theme.mode[mode].required
  )
}

export function useCheckboxInputCss() {
  const {
    form: {
      checkbox: { input: theme },
    },
  } = useTheme()

  return classNames(theme.base)
}

export function useFieldsetCss({ indent }: { indent: FieldSetIndent }) {
  const {
    form: { fieldset: theme },
  } = useTheme()

  return classNames(theme.container.indent[indent])
}

export function useFieldsetLegendCss({
  mode,
  tone,
  disabled,
  indent,
  showRequired,
}: {
  mode: Mode
  tone: FormTone
  disabled: boolean
  indent: FieldSetIndent
  showRequired: boolean | undefined
}) {
  const {
    form: {
      fieldset: { legend: theme },
    },
  } = useTheme()

  const labelCss = useInputLabelCss({
    mode,
    tone,
    disabled,
    showRequired,
  })

  const labelCssWithoutMarginLeft = getClassNameWithoutMarginLeft(labelCss)

  return classNames(labelCssWithoutMarginLeft, theme.indent[indent])
}

export function getClassNameWithoutMarginLeft(className: string): string {
  return className.replace(/(^|\s)ml-\w+(?=\s|$)/, '')
}

export function useToggleSwitchCss({
  layout,
  disabled,
  applyInputHeight,
  size,
}: {
  layout: ToggleSwitchLayout
  disabled: boolean
  applyInputHeight: boolean
  size: Size
}) {
  const {
    form: { toggleSwitch: theme },
  } = useTheme()

  return classNames(
    theme.base,
    theme.layout[layout],
    applyInputHeight && [theme.inputHeight.base, theme.inputHeight.size[size]],
    disabled ? theme.disabled : theme.normal
  )
}

export function useToggleSwitchLabelCss({
  mode,
  size,
  disabled,
  showRequired,
}: {
  mode: Mode
  size: Size
  disabled: boolean
  showRequired: boolean | undefined
}) {
  const {
    form: {
      toggleSwitch: { label: theme },
    },
  } = useTheme()

  return classNames(
    theme.base,
    theme.size[size],
    disabled ? theme.mode[mode].disabled : theme.mode[mode].normal,
    showRequired && theme.mode[mode].required
  )
}

export function useToggleSwitchInputCss() {
  const {
    form: {
      toggleSwitch: { input: theme },
    },
  } = useTheme()

  return classNames(theme.base)
}

export function useToggleSwitchSwitchCss({
  mode,
  size,
  disabled,
}: {
  mode: Mode
  size: Size
  disabled: boolean
}) {
  const {
    form: {
      toggleSwitch: { switch: theme },
    },
  } = useTheme()

  return classNames(
    theme.base,
    theme.size[size].base,
    disabled ? theme.disabled : theme.normal,
    disabled ? theme.modeState[mode].disabled : theme.modeState[mode].normal
  )
}

export function useToggleSwitchHandleCss({
  mode,
  size,
  disabled,
}: {
  mode: Mode
  size: Size
  disabled: boolean
}) {
  const {
    form: {
      toggleSwitch: { handle: theme },
    },
  } = useTheme()

  return classNames(
    theme.base,
    theme.size[size],
    disabled ? theme.disabled : theme.normal,
    disabled ? theme.modeState[mode].disabled : theme.modeState[mode].normal
  )
}
