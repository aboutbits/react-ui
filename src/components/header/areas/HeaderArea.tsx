import React, { ReactNode } from 'react'
import IconMenu from '@aboutbits/react-material-icons/dist/IconMenu'
import classNames from 'classnames'
import { HeaderLargeAction } from '../actions/HeaderLargeAction'
import { useTheme } from '../../../framework/theme/ThemeContext'
import { useInternationalization } from '../../../framework/internationalization/InternationalizationContext'
import { useNavigationToggle } from '../../navigation/NavigationContext'
import { HeaderLeftArea } from './HeaderLeftArea'

type Props = {
  /**
   * Defines a JSX-element which can be used to navigate to the previous page.
   * */
  navigation?: ReactNode
}

const HeaderArea: React.FC<Props> = ({ navigation = null, children }) => {
  const intl = useInternationalization()
  const menuToggle = useNavigationToggle()
  const { header } = useTheme()
  return (
    <div className={classNames(header.area.base, header.area.normal)}>
      {navigation === null ? (
        <HeaderLeftArea className="block lg:hidden">
          <HeaderLargeAction
            icon={IconMenu}
            label={intl.translate('app.nav.menu')}
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
