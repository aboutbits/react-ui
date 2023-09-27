import classNames from 'classnames'
import { ReactElement } from 'react'
import { useTheme } from '../../../framework'
import { LoadingBar } from '../../loading'
import { DescriptionItem as DescriptionItem } from './DescriptionItem'

/**
 * This component is used to show a loading [DescriptionItem](/docs/components-content-descriptionitem--docs).
 */
export function LoadingDescriptionItem({
  className,
}: {
  className?: string
}): ReactElement {
  const { content } = useTheme()
  return (
    <DescriptionItem
      className={classNames(content.loadingDescriptionItem.base, className)}
      title={
        <LoadingBar className={content.loadingDescriptionItem.upper.base} />
      }
      content={
        <LoadingBar className={content.loadingDescriptionItem.lower.base} />
      }
    />
  )
}
