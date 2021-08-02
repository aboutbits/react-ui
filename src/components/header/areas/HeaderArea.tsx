import React, { ReactNode } from 'react'
import { useIntl } from 'react-intl'
import IconMenu from '@aboutbits/react-material-icons/dist/IconMenu'
// original path: ../../../layouts/app/menu/MenuContext
import { HeaderLargeAction } from '../actions/HeaderLargeAction'
import { useTheme } from '../../../designSystem/theme/ThemeContext'
import { useMenuToggle } from './MenuContext'
import { HeaderLeftArea } from './HeaderLeftArea'

type Props = {
  /**
   * Defines a JSX-element which can be used to navigate to the previous page.
   * */
  navigation?: ReactNode
}

const HeaderArea: React.FC<Props> = ({ navigation = null, children }) => {
  const intl = useIntl()
  const menuToggle = useMenuToggle()
  const { header } = useTheme()
  return (
    <div className={header.area.base}>
      {navigation === null ? (
        <HeaderLeftArea className="block lg:hidden">
          <HeaderLargeAction
            icon={IconMenu}
            label={intl.formatMessage({ id: 'app.nav.menu' })}
            onClick={menuToggle}
          />
        </HeaderLeftArea>
      ) : (
        navigation
      )}
      {children}
    </div>
  )
}

export { HeaderArea }
