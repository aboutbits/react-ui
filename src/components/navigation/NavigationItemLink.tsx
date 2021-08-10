import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import React, { ComponentType, ReactElement, ReactNode } from 'react'
import classNames from 'classnames'
import { useLinkComponent } from '../../designSystem/router/LinkComponentContext'
import { useTheme } from '../../designSystem/theme/ThemeContext'
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
  /**
   * Is the current link active.
   */
  active?: boolean
  /**
   * Href of the link.
   */
  href: string
} & ClassNameProps

export function NavigationItemLink({
  content,
  icon: Icon,
  active = false,
  className = '',
  ...props
}: Props): ReactElement {
  const LinkComponent = useLinkComponent()
  const { navigation } = useTheme()

  return (
    <LinkComponent
      className={classNames(
        className,
        navigation.item.base,
        active ? navigation.item.active : navigation.item.normal
      )}
      {...props}
    >
      <Icon className={navigation.item.icon.base} />
      <div className={navigation.item.content.base}>{content}</div>
    </LinkComponent>
  )
}
