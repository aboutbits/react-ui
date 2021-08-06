import { useIntl } from 'react-intl'
import classNames from 'classnames'
import IconStoreMallDirectory from '@aboutbits/react-material-icons/dist/IconStoreMallDirectory'
import IconDescription from '@aboutbits/react-material-icons/dist/IconDescription'
import IconPowerSettingsNew from '@aboutbits/react-material-icons/dist/IconPowerSettingsNew'
import { ClassNameProps } from '../types'
import { MenuHeader } from './MenuHeader'
import { MenuButton } from './MenuButton'
import { MenuLink } from './MenuLink'

const Menu: React.FC<ClassNameProps> = ({ className, children }) => {
  const intl = useIntl()

  return (
    <div className={classNames(className, 'flex flex-col shadow-md bg-white')}>
      <MenuHeader />
      <nav
        aria-label={intl.formatMessage({ id: 'app.nav.accessibility.main' })}
        className="flex flex-col flex-1 justify-between py-3 lg:py-8 px-3 lg:px-4"
      >
        <ul className="space-y-3 lg:space-y-2">
          {/*<MenuLink*/}
          {/*  href="/"*/}
          {/*  text={intl.formatMessage({ id: 'app.nav.dashboard' })}*/}
          {/*  icon={IconDashboard}*/}
          {/*  strict*/}
          {/*/>*/}
          <MenuLink
            href="/organizations"
            text={intl.formatMessage({ id: 'app.nav.organizations' })}
            icon={IconStoreMallDirectory}
          />
          <MenuLink
            href="/machines"
            text={intl.formatMessage({ id: 'app.nav.machines' })}
            icon={IconDescription}
          />
          {/*<AuthGuard roles={[Role.ADMIN]}>*/}
          {/*  <>*/}
          {/*<MenuLink*/}
          {/*  href="/updates"*/}
          {/*  text={intl.formatMessage({ id: 'app.nav.updates' })}*/}
          {/*  icon={IconUpdate}*/}
          {/*/>*/}
          {/*    <MenuLink*/}
          {/*      href="/users"*/}
          {/*      text={intl.formatMessage({ id: 'app.nav.users' })}*/}
          {/*      icon={IconPeople}*/}
          {/*    />*/}
          {/*<MenuLink*/}
          {/*  href="/service"*/}
          {/*  text={intl.formatMessage({ id: 'app.nav.service' })}*/}
          {/*  icon={IconHelp}*/}
          {/*/>*/}
          {/*  </>*/}
          {/*</AuthGuard>*/}
        </ul>
        <MenuButton
          //onClick={logout}
          text={intl.formatMessage({ id: 'app.logout' })}
          icon={IconPowerSettingsNew}
        />
      </nav>
      {children}
    </div>
  )
}

export { Menu }
