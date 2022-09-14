import classNames from 'classnames'
import { ReactElement, ReactNode, UIEventHandler, useState } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DialogContentAreaProps = ClassNameProps & {
  children?: ReactNode
  enableScrollLayout?: boolean
}

export function DialogContentArea({
  children,
  className,
  enableScrollLayout = true,
}: DialogContentAreaProps): ReactElement {
  const { dialog } = useTheme()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const onScroll: UIEventHandler<HTMLDivElement> | undefined =
    enableScrollLayout
      ? (event) => {
          setIsScrolled(event.currentTarget.scrollTop > 0)
        }
      : undefined

  return (
    <div
      onScroll={onScroll}
      className={classNames(
        dialog.contentArea.base,
        enableScrollLayout
          ? dialog.contentArea.scrolled[isScrolled ? 'on' : 'off']
          : null,
        className
      )}
    >
      {children}
    </div>
  )
}
