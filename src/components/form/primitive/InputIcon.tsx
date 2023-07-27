import classNames from 'classnames'
import { ComponentType, ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { IconProps, Mode, ModeProps } from '../../types'

export type InputIconProps = {
  icon: ComponentType<IconProps>
  position: IconPosition
  disabled?: boolean
  className?: string
} & ModeProps

export enum IconPosition {
  Start = 'START',
  End = 'END',
}

/**
 * A themed `Icon` component to be used with field components.
 */
export function InputIcon({
  icon: Icon,
  position,
  mode = Mode.Light,
  disabled = false,
  className,
}: InputIconProps): ReactElement {
  const { form } = useTheme()

  return (
    <div
      className={classNames(
        form.inputIcon.container.base,
        form.inputIcon.container[position],
      )}
    >
      <Icon
        className={classNames(
          form.inputIcon.base,
          disabled
            ? form.inputIcon[mode].disabled
            : form.inputIcon[mode].normal,
          className,
        )}
      />
    </div>
  )
}
