import { ClassNameProps } from '../../types'

type Props = ClassNameProps

const HeaderRightArea: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="flex items-center ml-4 space-x-3 lg:space-x-4">
        {children}
      </div>
    </div>
  )
}

export { HeaderRightArea }
