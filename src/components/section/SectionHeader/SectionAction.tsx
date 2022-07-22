import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ButtonIcon, ButtonIconProps, Variant } from '../../button'
import { Tone, ClassNameProps } from '../../types'

export type SectionActionProps = Omit<ButtonIconProps, 'ref'>

export function SectionAction(props: SectionActionProps): ReactElement {
  const { section } = useTheme()

  return (
    <ButtonIcon
      variant={Variant.transparent}
      tone={Tone.neutral}
      className={classNames(section.action.base)}
      {...props}
    />
  )
}

export function SectionActions({
  children,
  className,
}: {
  children: ReactNode
} & ClassNameProps): ReactElement {
  const { section } = useTheme()

  return (
    <div className={classNames(section.actions.base, className)}>
      {children}
    </div>
  )
}
