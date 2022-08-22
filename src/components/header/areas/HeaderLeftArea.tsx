import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps & { children?: ReactNode }

export function HeaderLeftArea({ className, children }: Props): ReactElement {
  const { header } = useTheme()

  return (
    <div className={className}>
      <div className={header.leftArea.base}>{children}</div>
    </div>
  )
}
