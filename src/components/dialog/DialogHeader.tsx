import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import classNames from 'classnames'
import React, { ReactElement } from 'react'
import { useInternationalization, useTheme } from '../../framework'
import { HeaderArea, HeaderTitle } from '../header'
import { HeaderRightActionIcon } from '../header/actions/HeaderRightActionIcon'
import { ClassNameProps } from '../types'

export type DialogHeaderProps = {
  /**
   * Defines which action should be executed on dismissing.
   **/
  onDismiss: (event?: React.SyntheticEvent<Element, Event> | undefined) => void
  /**
   * Defines the title of the header.
   **/
  title: string
} & ClassNameProps

function DialogHeader({
  title,
  onDismiss,
  className,
}: DialogHeaderProps): ReactElement {
  const { dialog } = useTheme()
  const internationalization = useInternationalization()

  return (
    <div className={classNames(dialog.header.base, className)}>
      <HeaderArea>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderRightActionIcon
          icon={IconClose}
          label={internationalization.translate('shared.button.close')}
          onClick={onDismiss}
        />
      </HeaderArea>
    </div>
  )
}

export { DialogHeader }
