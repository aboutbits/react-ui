import classNames from 'classnames'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import { useTheme } from '../../../framework'
import { SectionContent, SectionContentProps } from './SectionContent'

type Props = SectionContentProps

export const SectionContentError: React.FC<Props> = ({
  children,
  className,
  ...props
}) => {
  const { section } = useTheme()
  return (
    <SectionContent
      className={classNames(section.content.error.container.base, className)}
      {...props}
    >
      <div className={section.content.error.iconContainer.base}>
        <IconWarning
          height={22}
          width={22}
          className={section.content.error.icon.base}
        />
      </div>
      <span className={section.content.error.children.base}>{children}</span>
    </SectionContent>
  )
}
