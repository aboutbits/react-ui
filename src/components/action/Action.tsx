import classNames from 'classnames'
import { ClassNameProps } from '../section/type'

export enum ActionSectionVariant {
  right = 'right',
  center = 'center',
  left = 'left',
}

const variantStyles: Record<ActionSectionVariant, string> = {
  [ActionSectionVariant.right]: 'lg:justify-end',
  [ActionSectionVariant.center]: 'lg:justify-center',
  [ActionSectionVariant.left]: 'lg:justify-start',
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
}) => (
  <div
    className={classNames(
      'flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mx-4 lg:mx-0',
      variantStyles[variant],
      className
    )}
  >
    {children}
  </div>
)
