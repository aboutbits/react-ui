import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

export type SectionContentProps = ClassNameProps & { layout?: Layout }

export enum Layout {
  oneColumnGrid = 'oneColumnGrid',
  twoColumnGrid = 'twoColumnGrid',
}

export const SectionContent: React.FC<SectionContentProps> = ({
  layout,
  children,
  className,
}) => {
  const { section } = useTheme()
  const layoutStyle =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof layout !== 'undefined' ? section.content.layout[layout] : ''

  return (
    <div className={classNames(section.content.base, layoutStyle, className)}>
      {children}
    </div>
  )
}
