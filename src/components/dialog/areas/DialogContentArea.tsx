import classNames from 'classnames'
import { ReactElement, ReactNode, UIEventHandler, useState } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type DialogContentAreaProps = ClassNameProps & {
  children?: ReactNode
}

export function DialogContentArea({
  children,
  className,
}: DialogContentAreaProps): ReactElement {
  const { dialog } = useTheme()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const onScroll: UIEventHandler<HTMLDivElement> = (event) => {
    setIsScrolled(event.currentTarget.scrollTop > 0)
  }

  return (
    <div
      onScroll={onScroll}
      className={classNames(
        dialog.contentArea.base,
        dialog.contentArea.scrolled[isScrolled ? 'on' : 'off'],
        className
      )}
    >
      {children}
    </div>
  )
}
