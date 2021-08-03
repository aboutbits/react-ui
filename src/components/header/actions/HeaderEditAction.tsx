import Link from 'next/link'
import IconEdit from '@aboutbits/react-material-icons/dist/IconEdit'
import { HeaderRightArea } from '../areas/HeaderRightArea'

const HeaderEditAction: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => (
  <HeaderRightArea>
    <Link href={href}>
      <a>
        <IconEdit
          className="w-6 lg:w-8 h-6 lg:h-8 hover:text-gray-700 focus:text-gray-700 fill-current"
          title={label}
        />
      </a>
    </Link>
  </HeaderRightArea>
)

export { HeaderEditAction }
