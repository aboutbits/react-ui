import { ReactElement, ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps & { children?: ReactNode }

export function HeaderRightArea({ className, children }: Props): ReactElement {
  const { header } = useTheme()

  return (
    <div className={className}>
      <div className={header.rightArea.base}>{children}</div>
    </div>
  )
}
