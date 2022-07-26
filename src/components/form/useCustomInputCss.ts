import classNames from 'classnames'
import { FieldMetaProps, useField } from 'formik'
import { useTheme } from '../../framework'
import { Mode } from '../types'
import { Variant } from './types'

type ThemeInputStates = {
  base?: string
  normal?: string
  error?: string
  disabled?: string
}

type ThemeVariant = Partial<Record<Variant, ThemeInputStates>> & {
  base: ThemeInputStates
}

type ThemeInputObject = {
  base: string
  modeVariant: Record<Mode, ThemeVariant>
}

export const useCustomInputCss = (
  fieldName: string,
  fieldDisabled = false,
  fieldMode = Mode.light,
  fieldVariant = Variant.ghost
): { inputCss: string; labelCss: string; errorCss: string } => {
  const [, meta] = useField({ name: fieldName })
  const {
    form: { input, inputLabel, inputError },
  } = useTheme()

  return {
    inputCss: getCssFor(input, meta, fieldDisabled, fieldMode, fieldVariant),
    labelCss: getCssFor(
      inputLabel,
      meta,
      fieldDisabled,
      fieldMode,
      fieldVariant
    ),
    errorCss: getCssFor(
      inputError,
      meta,
      fieldDisabled,
      fieldMode,
      fieldVariant
    ),
  }
}

function getCssFor(
  theme: ThemeInputObject,
  formikMeta: FieldMetaProps<unknown>,
  fieldDisabled = false,
  fieldMode = Mode.light,
  fieldVariant = Variant.ghost
) {
  const modeCss = theme.modeVariant[fieldMode]
  let modeStateCss = classNames(
    modeCss.base.normal,
    modeCss[fieldVariant]?.normal
  )

  if (formikMeta.touched && formikMeta.error) {
    modeStateCss = classNames(modeCss.base.error, modeCss[fieldVariant]?.error)
  }

  if (fieldDisabled) {
    modeStateCss = classNames(
      modeCss.base.disabled,
      modeCss[fieldVariant]?.disabled
    )
  }

  return classNames(
    theme.base,
    modeCss.base.base,
    modeCss[fieldVariant]?.base,
    modeStateCss
  )
}
