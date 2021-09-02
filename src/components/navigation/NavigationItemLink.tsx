import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import React, { ComponentType, ReactElement, ReactNode } from 'react'
import classNames from 'classnames'
import {
  LinkComponentProps,
  useLinkComponent,
  useRouter,
  useTheme,
} from '../../framework'
import { ClassNameProps } from '../types'

export type Props = {
  /**
   * Defines the content for the link.
   * */
  content: ReactNode
  /**
   * Defines the icon on the start.
   */
  icon: ComponentType<IconProps>
} & ClassNameProps &
  LinkComponentProps

export function NavigationItemLink({
  content,
  icon: Icon,
  className = '',
  internal = true,
  ...props
}: Props): ReactElement {
  const LinkComponent = useLinkComponent()
  const { navigation } = useTheme()

  const router = useRouter()
  const active = props.href.startsWith(router.pathname)

  return (
    <LinkComponent
      className={classNames(
        className,
        navigation.item.base,
        active ? navigation.item.active : navigation.item.normal
      )}
      internal={internal}
      {...props}
    >
      <Icon className={navigation.item.icon.base} />
      <div className={navigation.item.content.base}>{content}</div>
    </LinkComponent>
  )
}
