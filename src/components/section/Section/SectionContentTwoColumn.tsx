import classNames from 'classnames'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'
import { SectionContent } from './SectionContent'

type Props = ClassNameProps & { backgroundColor?: string }

export const SectionContentTwoColumn: React.FC<Props> = ({
  children,
  className,
  backgroundColor,
}) => {
  const { section } = useTheme()
  return (
    <SectionContent
      className={classNames(
        section.contentTwoColumn.base,
        `bg-${backgroundColor}`,
        className
      )}
    >
      {children}
    </SectionContent>
  )
}
