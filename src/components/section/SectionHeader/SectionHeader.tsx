import classNames from 'classnames'

import { ActionIconProps, ClassNameProps, TitleReactProps } from '../type'

type SectionHeaderWithActionProps = TitleReactProps & ActionIconProps

type SectionHeaderProps = ClassNameProps

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  children,
}) => (
  <div className={classNames(`px-4 lg:px-5 pt-5 pb-3 bg-white`, className)}>
    {children}
  </div>
)

export const SectionTitle: React.FC = ({ children }) => (
  <h1 className="text-xs font-bold uppercase">{children}</h1>
)

export const SectionHeaderWithAction: React.FC<SectionHeaderWithActionProps> =
  ({ title, actionIcon }) => (
    <SectionHeader>
      <div className="flex justify-between items-center">
        <SectionTitle>{title}</SectionTitle>
        {actionIcon}
      </div>
    </SectionHeader>
  )
