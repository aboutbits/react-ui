import { UrlObject } from 'url'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import { ComponentType } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { useLinkComponent } from '../../designSystem/router/LinkComponentContext'

declare type Url = string | UrlObject

export type MenuLinkProps = {
  text: string
  icon: ComponentType<IconProps>
  strict?: boolean
  href: Url
}

const MenuLink: React.FC<MenuLinkProps> = ({
  text,
  icon: Icon,
  strict = false,
  ...props
}) => {
  const router = useRouter()
  const LinkComponent = useLinkComponent()
  const active = strict
    ? router.asPath === props.href
    : router.asPath.startsWith(props.href.toString())

  return (
    <li>
      <LinkComponent {...props}>
        <a
          className={classNames(
            'flex flex-row items-center px-4 py-3 lg:px-5 lg:py-4 outline-none hover:bg-gray-100 focus:bg-primary-50',
            active
              ? 'text-white from-primary bg-gradient-to-r to-primary-700'
              : 'text-gray-700'
          )}
        >
          <Icon className="mr-4 w-6 h-6 fill-current" />
          <div className="flex-1">{text}</div>
        </a>
      </LinkComponent>
    </li>
  )
}

export { MenuLink }
