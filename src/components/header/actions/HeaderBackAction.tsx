import React, { ComponentType } from 'react'
import IconArrowBack from '@aboutbits/react-material-icons/dist/IconArrowBack'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { useIntl } from 'react-intl'
import { HeaderLargeAction } from '../index'
import { HeaderLeftArea } from '../areas/HeaderLeftArea'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps & {
  /**
   * Defines the icon of the button.
   * */
  icon?: ComponentType<IconProps>
  /**
   * Sets a label for [aria-label](https://www.w3schools.com/accessibility/accessibility_labels.php).
   * */
  label?: string
  /**
   * Defines which action should be executed on clicking.
   * */
  onClick: () => void
}

const HeaderBackAction: React.FC<Props> = ({
  label,
  onClick,
  icon = IconArrowBack,
  className,
}) => {
  const intl = useIntl()

  return (
    <HeaderLeftArea>
      <HeaderLargeAction
        icon={icon}
        label={label || intl.formatMessage({ id: 'shared.button.goBack' })}
        onClick={onClick}
        className={className}
      />
    </HeaderLeftArea>
  )
}

export { HeaderBackAction }
