import classNames from 'classnames'
import { ClassNameProps } from '../../types'
import { useTheme } from '../../../designSystem/theme/ThemeContext'

type Props = ClassNameProps

const HeaderTitle: React.FC<Props> = ({ className, children }) => {
  const { header } = useTheme()
  return (
    <h1 className={classNames(className, header.title.base)}>{children}</h1>
  )
}

export { HeaderTitle }
