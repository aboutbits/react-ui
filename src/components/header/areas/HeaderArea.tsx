import React, { ReactElement, ReactNode } from 'react'
import IconMenu from '@aboutbits/react-material-icons/dist/IconMenu'
import classnames from 'classnames'
import { HeaderLargeAction } from '../actions/HeaderLargeAction'
import { useTheme, useInternationalization } from '../../../framework'
import { useNavigationToggle } from '../../navigation'
import { ClassNameProps } from '../../types'
import { HeaderLeftArea } from './HeaderLeftArea'

type Props = {
  /**
   * Defines a JSX-element which can be used to navigate to the previous page.
   **/
  navigation?: ReactNode
}

function ToggleNavigation(): ReactElement {
  const menuToggle = useNavigationToggle()
  const intl = useInternationalization()

  return (
    <HeaderLeftArea className="block lg:hidden">
      <HeaderLargeAction
        icon={IconMenu}
        label={intl.translate('app.nav.menu')}
        onClick={menuToggle}
      />
    </HeaderLeftArea>
  )
}

const HeaderAreaContainer: React.FC<ClassNameProps> = ({
  children,
  className,
}) => {
  const { header } = useTheme()
  return (
    <div className={classnames(header.area.base, className)}>{children}</div>
  )
}

const HeaderArea: React.FC<Props> = ({ navigation = null, children }) => {
  return (
    <HeaderAreaContainer>
      {navigation === null ? <ToggleNavigation /> : navigation}
      {children}
    </HeaderAreaContainer>
  )
}

export { HeaderArea, HeaderAreaContainer }
