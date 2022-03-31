import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import React, { ReactElement } from 'react'
import classNames from 'classnames'
import {
  HeaderAreaContainer,
  HeaderRightArea,
  HeaderSmallAction,
  HeaderTitle,
} from '../header'
import { useInternationalization, useTheme } from '../../framework'
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
      <HeaderAreaContainer>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderRightArea>
          <HeaderSmallAction
            icon={IconClose}
            label={internationalization.translate('shared.search.close')}
            onClick={onDismiss}
          />
        </HeaderRightArea>
      </HeaderAreaContainer>
    </div>
  )
}

export { DialogHeader }
