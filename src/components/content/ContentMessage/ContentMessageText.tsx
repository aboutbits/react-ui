import classNames from 'classnames'
import { ReactNode } from 'react'
import { useTheme } from '../../../framework'
import { ClassNameProps, Tone } from '../../types'

export type ContentMessageTextProps = ClassNameProps & {
  tone?: Tone
  children?: ReactNode
}

export function ContentMessageText({
  tone = Tone.primary,
  className,
  children,
}: ContentMessageTextProps) {
  const { content } = useTheme()

  return (
    <div
      className={classNames(
        content.message.text.base,
        content.message.text.tone[tone],
        className,
      )}
    >
      {children}
    </div>
  )
}
