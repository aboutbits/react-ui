import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import classNames from 'classnames'
import { ComponentType, ReactElement } from 'react'
import { useTheme } from '../../framework'
import { Mode, ModeProps } from '../types'

export type InputIconProps = {
  icon: ComponentType<IconProps>
  position: IconPosition
  disabled?: boolean
  className?: string
} & ModeProps

export enum IconPosition {
  start = 'start',
  end = 'end',
}

export function InputIcon({
  icon: Icon,
  position,
  mode = Mode.light,
  disabled = false,
  className,
}: InputIconProps): ReactElement {
  const { form } = useTheme()

  return (
    <div
      className={classNames(
        form.input.icon.container.base,
        form.input.icon.container[position]
      )}
    >
      <Icon
        className={classNames(
          form.input.icon.base,
          disabled
            ? form.input.icon[mode].disabled
            : form.input.icon[mode].normal,
          className
        )}
      />
    </div>
  )
}
