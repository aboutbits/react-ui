import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps, Tone } from '../../types'

export type ContentMessageTitleProps = ClassNameProps & {
  tone?: Tone
  children?: ReactNode
}

export function ContentMessageTitle({
  tone = Tone.Primary,
  className,
  children,
}: ContentMessageTitleProps) {
  const { content } = useTheme()

  return (
    <div
      className={classNames(
        content.message.title.base,
        content.message.title.tone[tone],
        className
      )}
    >
      {children}
    </div>
  )
}
