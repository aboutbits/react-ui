import { ReactElement } from 'react'
import { useRouter } from '../../framework'
import { HeaderArea } from './areas/HeaderArea'
import { HeaderBackAction } from './actions/HeaderBackAction'
import { HeaderTitle } from './areas/HeaderTitle'
import { HeaderEditAction } from './actions/HeaderEditAction'

type Props = {
  /**
   * Define a header title.
   **/
  title: string
  /**
   * Define where the user is redirected to.
   **/
  editHref: string
  /**
   * Define the accessibility label for the edit icon.
   **/
  editLabel: string
  /**
   * Override default onBack action.
   **/
  onBack?: () => void

  /**
   * Override default accessibility label for back action.
   **/
  backLabel?: string
}

export function HeaderBackWithEdit({
  title,
  editHref,
  editLabel,
  onBack,
  backLabel,
}: Props): ReactElement {
  const router = useRouter()

  return (
    <HeaderArea
      navigation={
        <HeaderBackAction onClick={onBack || router.back} label={backLabel} />
      }
    >
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderEditAction href={editHref} label={editLabel} />
    </HeaderArea>
  )
}
