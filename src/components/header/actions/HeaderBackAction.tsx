import React, { ComponentType, ReactElement } from 'react'
import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { HeaderLargeAction } from '../index'
import { HeaderLeftArea } from '../areas/HeaderLeftArea'
import { ClassNameProps } from '../../types'
import { useInternationalization } from '../../../framework'

export type HeaderBackActionProps = ClassNameProps & {
  /**
   * Defines the icon of the button.
   **/
  icon?: ComponentType<IconProps>
  /**
   * Sets a label for [aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php).
   **/
  label?: string
  /**
   * Defines which action should be executed on clicking.
   **/
  onClick: () => void
}

export function HeaderBackAction({
  label,
  onClick,
  icon = IconArrowBack,
  className,
}: HeaderBackActionProps): ReactElement {
  const internationalization = useInternationalization()

  return (
    <HeaderLeftArea>
      <HeaderLargeAction
        icon={icon}
        label={label || internationalization.translate('shared.button.goBack')}
        onClick={onClick}
        className={className}
      />
    </HeaderLeftArea>
  )
}
