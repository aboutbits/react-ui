import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ContentMessage, ContentMessageProps } from '../../content'
import { ClassNameProps } from '../../types'
import { SectionContent } from './SectionContent'

export type SectionContentMessageProps = ClassNameProps & ContentMessageProps

export function SectionContentMessage({
  className,
  ...props
}: SectionContentMessageProps) {
  const { section } = useTheme()

  return (
    <SectionContent
      className={classNames(section.contentMessage.contentContainer, className)}
      {...props}
    >
      <ContentMessage {...props} />
    </SectionContent>
  )
}
