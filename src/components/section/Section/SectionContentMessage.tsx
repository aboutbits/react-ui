import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { SectionContent, SectionContentProps } from './SectionContent'

type Props = SectionContentProps

export const SectionContentMessage: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  const { section } = useTheme()
  return (
    <SectionContent
      className={classNames(section.contentMessage.container.base, className)}
      {...props}
    >
      {children}
    </SectionContent>
  )
}
