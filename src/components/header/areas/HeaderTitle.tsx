import classNames from 'classnames'
import { useTheme } from '../../../framework'
import { ClassNameProps } from '../../types'

type Props = ClassNameProps

const HeaderTitle: React.FC<Props> = ({ className, children }) => {
  const { header } = useTheme()
  return (
    <h1 className={classNames(className, header.title.base)}>{children}</h1>
  )
}

export { HeaderTitle }
