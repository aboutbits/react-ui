import classNames from 'classnames'

type Props = {
  /**
   * Adjusting individual style with any CSS class.
   * */
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
