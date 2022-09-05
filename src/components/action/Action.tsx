import classNames from 'classnames'
import { useTheme } from '../../framework'
import { ClassNameProps } from '../types'

export enum ActionSectionPosition {
  start = 'start',
  center = 'center',
  end = 'end',
}

type ActionProps = ClassNameProps & {
  /**
   * Defines the position of the action.
   **/
  position?: ActionSectionPosition
}

export const Actions: React.FC<ActionProps> = ({
  position = ActionSectionPosition.end,
  children,
  className,
}) => {
  const { action } = useTheme()
  return (
    <div
      className={classNames(
        action.action.base,
        action.action.position[position],
        className
      )}
    >
      {children}
    </div>
  )
}
