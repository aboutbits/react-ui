import classNames from 'classnames'
import { ClassNameProps } from '../../types'
import { SectionContent } from './SectionContent'

type Props = ClassNameProps & { backgroundColor?: string }

export const SectionContentTwoColumn: React.FC<Props> = ({
  children,
  className,
  backgroundColor,
}) => (
  <SectionContent
    className={classNames(
      `grid xl:grid-cols-2 xl:gap-x-5 gap-y-5 bg-${backgroundColor}`,
      className
    )}
  >
    {children}
  </SectionContent>
)
