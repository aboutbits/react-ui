import classNames from 'classnames'
import IconSettings from '@aboutbits/react-material-icons/dist/IconSettings'
import Link from 'next/link'
import { useIntl } from 'react-intl'
//import { useContext } from 'react'
//import { AuthContext } from '../../../auth/AuthContext'
import styles from './MenuHeader.module.css'

const MenuHeader: React.FC<{
  data: { user: { name: string; email: string } }
}> = (data) => {
  const intl = useIntl()
  //const { data } = useContext(AuthContext)
  return (
    <div className={classNames(styles['bg-header'], 'relative')}>
      {/* This div is important, otherwise the content will be transparent */}
      <div className="relative">
        <div className="pt-7 lg:pt-8 pb-6 lg:pb-5">
          <div className="inline-block py-5 pr-4 lg:pr-5 pl-4 lg:pl-5 bg-white">
            <img
              src="/logo.svg"
              width="62"
              height="35"
              className={classNames(styles['w-logo'], styles['h-logo'])}
            />
          </div>
          <div
            className={classNames(
              styles['user-info'],
              'px-4 lg:px-4 pt-6 lg:pt-5'
            )}
          >
            <span className="block text-3xl text-white truncate">
              {data?.user.name}
            </span>
            <div className="flex flex-row justify-between items-center">
              <span className="block text-xs text-white truncate">
                {data?.user.email}
              </span>
              <Link href="/profile">
                <a className="hover:opacity-60 active:opacity-60">
                  <IconSettings
                    width="24"
                    height="24"
                    className="text-white fill-current"
                    title={intl.formatMessage({
                      id: 'app.nav.btn.profile',
                    })}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { MenuHeader }
