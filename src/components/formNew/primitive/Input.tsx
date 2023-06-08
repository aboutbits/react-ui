import classNames from 'classnames'
import { ComponentType, forwardRef } from 'react'
import { useTheme } from '../../../framework'
import { IconProps, Mode, ModeProps } from '../../types'
import { FormTone, FormToneProps, InputVariant, VariantProps } from '../types'
import { IconPosition, InputIcon } from './InputIcon'
import { useInputCss } from './useThemedCss'

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  ModeProps &
  FormToneProps &
  VariantProps & {
    name: string
    iconStart?: ComponentType<IconProps>
    iconEnd?: ComponentType<IconProps>
  }

/**
 * A themed `input` element.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  function InputComponent(
    {
      mode = Mode.light,
      variant = InputVariant.solid,
      tone = FormTone.neutral,
      disabled = false,
      className,
      iconStart,
      iconEnd,
      ...props
    },
    ref
  ) {
    const { formNew } = useTheme()
    const inputCss = useInputCss({
      mode,
      variant,
      tone,
      disabled,
      withIconStart: !!iconStart,
      withIconEnd: !!iconEnd,
    })

    return (
      <div className={classNames(formNew.input.field, className)}>
        {iconStart && (
          <InputIcon
            icon={iconStart}
            position={IconPosition.start}
            mode={mode}
            disabled={disabled}
          />
        )}
        <input ref={ref} {...props} disabled={disabled} className={inputCss} />
        {iconEnd && (
          <InputIcon
            icon={iconEnd}
            position={IconPosition.end}
            mode={mode}
            disabled={disabled}
          />
        )}
      </div>
    )
  }
)
