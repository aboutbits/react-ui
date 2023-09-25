import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'
import { ActionsPosition } from './types'

export type ActionsProps = ClassNameProps & {
  /**
   * Defines the position of the actions.
   **/
  position?: ActionsPosition
  /**
   * Defines the children to be rendered.
   */
  children?: ReactNode
}

export function Actions({
  position = ActionsPosition.End,
  children,
  className,
}: ActionsProps): ReactElement {
  const { action } = useTheme()

  return (
    <div
      className={classNames(
        action.actions.base,
        action.actions.position[position],
        className,
      )}
    >
      {children}
    </div>
  )
}
