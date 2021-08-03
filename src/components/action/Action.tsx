import classNames from 'classnames'
import { ClassNameProps } from '../types'
import { useTheme } from '../../designSystem/theme/ThemeContext'

export enum ActionSectionVariant {
  right = 'right',
  center = 'center',
  left = 'left',
}

type ActionProps = ClassNameProps & {
  /**
   * Defines the variant of the action.
   * */
  variant?: ActionSectionVariant
}

export const Actions: React.FC<ActionProps> = ({
  variant = ActionSectionVariant.right,
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
