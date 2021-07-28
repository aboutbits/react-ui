import { ClassNameProps } from '../../types'

type Props = ClassNameProps

const HeaderLeftArea: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="flex items-center mr-4">{children}</div>
    </div>
  )
}

export { HeaderLeftArea }
