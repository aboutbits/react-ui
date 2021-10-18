import React, { ComponentType, ReactElement } from 'react'
import classNames from 'classnames'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type SectionActionProps = ClassNameProps & {
  /**
   * Defines icon of the action.
   **/
  Icon: ComponentType<IconProps>
  /**
   * Defines label of the action.
   **/
  label: string
  /**
   * On click handler for the button.
   */
  onClick: () => void
  /**
   * Defines if the action is disabled.
   **/
  disabled?: boolean | undefined
}

export function SectionAction({
  Icon,
  label,
  onClick,
  disabled,
  className,
}: SectionActionProps): ReactElement {
  const { section } = useTheme()

  return (
    <button
      className={classNames(
        section.action.base,
        disabled ? section.action.disabled : section.action.normal,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <Icon title={label} className={section.action.icon} />
    </button>
  )
}
