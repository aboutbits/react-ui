import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import classNames from 'classnames'
import { useField } from 'formik'
import { ComponentType, forwardRef } from 'react'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'
import { InputError } from './InputError'
import { IconPosition, InputIcon } from './InputIcon'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  ModeProps & {
    id: string
    label?: string
    name: string
    iconStart?: ComponentType<IconProps>
    iconEnd?: ComponentType<IconProps>
  }

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    { label, mode = Mode.light, className, iconStart, iconEnd, ...props },
    ref
  ) => {
    const customCss = useCustomInputCss(props.name, props.disabled, mode)
    const { form } = useTheme()
    const [field] = useField(props.name)

    return (
      <div className={className}>
        <InputLabel
          inputId={props.id}
          label={label}
          className={customCss.labelCss}
        />
        <div className={form.input.field}>
          {iconStart && (
            <InputIcon
              icon={iconStart}
              position={IconPosition.start}
              mode={mode}
              disabled={props.disabled}
            />
          )}
          <input
            {...field}
            {...props}
            ref={ref}
            className={classNames(
              customCss.inputCss,
              iconStart ? form.input.withIconStart : null,
              iconEnd ? form.input.withIconEnd : null
            )}
          />
          {iconEnd && (
            <InputIcon
              icon={iconEnd}
              position={IconPosition.end}
              mode={mode}
              disabled={props.disabled}
            />
          )}
        </div>
        <InputError name={props.name} className={customCss.errorCss} />
      </div>
    )
  }
)

Input.displayName = 'Input'
