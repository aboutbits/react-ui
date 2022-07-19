import classNames from 'classnames'
import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ButtonIcon, ButtonIconProps, Variant } from '../../button'
import { Tone } from '../../types'

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
}: {
  children: ReactNode
}): ReactElement {
  const { section } = useTheme()

  return <div className={section.actions.base}>{children}</div>
}
