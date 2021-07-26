import classNames from 'classnames'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'

import { SectionListItem } from '../SectionItem/SectionItem'
import { ClassNameProps } from '../type'

type Props = ClassNameProps

type SectionListEmptyProps = {
  /**
   * The className will be applied on the internal SectionListItem.
   */
  className?: string
}

type SectionListErrorProps = {
  /**
   * The className will be applied on the internal SectionListItem.
   */
  className?: string
}

export const SectionContentList: React.FC<Props> = ({
  children,
  className,
}) => (
  <div className={classNames('space-y-px bg-section-content-list', className)}>
    {children}
  </div>
)

export const SectionContentListEmpty: React.FC<SectionListEmptyProps> = ({
  children,
  className,
}) => (
  <SectionListItem className={classNames('justify-center py-4', className)}>
    {children}
  </SectionListItem>
)

export const SectionContentListError: React.FC<SectionListErrorProps> = ({
  children,
  className,
}) => (
  <SectionListItem className={classNames('justify-center py-4', className)}>
    <div className="mr-2 p-1.5 rounded-full bg-section-content-list-error-icon">
      <IconWarning
        height={22}
        width={22}
        className="text-section-content-list-error-icon fill-current"
      />
    </div>
    <span className="text-section-content-list-error">{children}</span>
  </SectionListItem>
)
