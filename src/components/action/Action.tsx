import classNames from 'classnames'
import { ClassNameProps } from '../types'
import { useTheme } from '../../designSystem/theme/ThemeContext'

export enum ActionSectionVariant {
  start = 'start',
  center = 'center',
  end = 'end',
}

type ActionProps = ClassNameProps & {
  /**
   * Defines the variant of the action.
   * */
  variant?: ActionSectionVariant
}

export const Actions: React.FC<ActionProps> = ({
  variant = ActionSectionVariant.end,
  children,
  className,
}) => {
  const { action } = useTheme()
  return (
    <div
      className={classNames(
        action.action.base,
        action.action.variant[variant],
        className
      )}
    >
      {children}
    </div>
  )
}
