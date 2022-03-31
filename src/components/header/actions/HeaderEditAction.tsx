import IconEdit from '@aboutbits/react-material-icons/dist/IconEdit'
import { HeaderRightArea } from '../areas/HeaderRightArea'
import {
  useTheme,
  useLinkComponent,
  LinkComponentProps,
} from '../../../framework'

type Props = {
  /**
   * Define the accessibility label for the icon.
   **/
  label: string
} & LinkComponentProps

const HeaderEditAction: React.FC<Props> = ({
  href,
  internal = true,
  label,
}) => {
  const { header } = useTheme()
  const LinkComponent = useLinkComponent()
  return (
    <HeaderRightArea>
      <LinkComponent href={href} internal={internal}>
        <IconEdit className={header.editAction.base} title={label} />
      </LinkComponent>
    </HeaderRightArea>
  )
}

export { HeaderEditAction }
