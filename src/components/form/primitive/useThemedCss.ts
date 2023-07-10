import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { Mode, Size } from '../../types'
import { FormTone, FormVariant } from '../types'
import { CheckboxLayout } from './Checkbox'
import { FieldSetIndent } from './Fieldset'
import { RadioLayout } from './Radio'
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
}: {
  mode: Mode
  tone: FormTone
  disabled: boolean
}) {
  const {
    form: { inputLabel: theme },
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
}: {
  mode: Mode
  size: Size
  disabled: boolean
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
      : theme.mode[mode][disabled ? 'disabled' : 'normal']
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

export function useRadioCss({
  layout,
  disabled,
  applyInputHeight,
  size,
}: {
  layout: RadioLayout
  disabled: boolean
  applyInputHeight: boolean
  size: Size
}) {
  const {
    form: { radio: theme },
  } = useTheme()

  return classNames(
    theme.base,
    theme.layout[layout],
    applyInputHeight && [theme.inputHeight.base, theme.inputHeight.size[size]],
    disabled ? theme.disabled : theme.normal
  )
}

export function useRadioLabelCss({
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
      radio: { label: theme },
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

export function useRadioInputCss({ size }: { size: Size }) {
  const {
    form: {
      radio: { input: theme },
    },
  } = useTheme()

  return classNames(theme.base, theme.size[size])
}

export function useRadioIconCss({
  mode,
  size,
  disabled,
  checked,
}: {
  mode: Mode
  size: Size
  disabled: boolean
  checked: boolean
}) {
  const {
    form: {
      radio: { icon: theme },
    },
  } = useTheme()

  const disabledState = disabled ? 'disabled' : 'normal'
  const checkedState = checked ? 'checked' : 'unchecked'
  return classNames(
    theme.base,
    theme.size[size],
    theme.mode[mode],
    theme[disabledState],
    theme[checkedState].base,
    theme[checkedState].modeState[mode][disabledState]
  )
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
}: {
  mode: Mode
  tone: FormTone
  disabled: boolean
  indent: FieldSetIndent
}) {
  const {
    form: {
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
}: {
  mode: Mode
  size: Size
  disabled: boolean
}) {
  const {
    form: {
      toggleSwitch: { label: theme },
    },
  } = useTheme()

  return classNames(
    theme.base,
    theme.size[size],
    disabled ? theme.mode[mode].disabled : theme.mode[mode].normal
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
