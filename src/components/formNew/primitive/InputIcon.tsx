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
  start = 'start',
  end = 'end',
}

/**
 * A themed `Icon` component to be used with field components.
 */
export function InputIcon({
  icon: Icon,
  position,
  mode = Mode.light,
  disabled = false,
  className,
}: InputIconProps): ReactElement {
  const { formNew } = useTheme()

  return (
    <div
      className={classNames(
        formNew.inputIcon.container.base,
        formNew.inputIcon.container[position]
      )}
    >
      <Icon
        className={classNames(
          formNew.inputIcon.base,
          disabled
            ? formNew.inputIcon[mode].disabled
            : formNew.inputIcon[mode].normal,
          className
        )}
      />
    </div>
  )
}
