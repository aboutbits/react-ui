import classNames from 'classnames'
import { SectionContent } from './SectionContent'
import { Props as SectionProps } from './Section'

type Props = SectionProps & { tone?: string }

export const SectionContentTwoColumn: React.FC<Props> = ({
  children,
  className,
  tone,
}) => (
  <SectionContent
    className={classNames(
      `grid xl:grid-cols-2 xl:gap-x-5 gap-y-5 ${tone}`,
      className
    )}
  >
    {children}
  </SectionContent>
)
