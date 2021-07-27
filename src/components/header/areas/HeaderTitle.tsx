import classNames from 'classnames'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps

const HeaderTitle: React.FC<Props> = ({ className, children }) => {
  return (
    <h1
      className={classNames(
        className,
        'flex-1 text-lg lg:text-3xl font-medium truncate'
      )}
    >
      {children}
    </h1>
  )
}

export { HeaderTitle }
