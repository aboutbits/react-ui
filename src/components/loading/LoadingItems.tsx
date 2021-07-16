import {
  SectionDescriptionItem,
  SectionDescriptionItemVariant,
} from '../section'
import { LoadingBar } from './LoadingBar'

const LoadingField: React.FC<{
  tone?: string
}> = ({ tone }) => (
  <SectionDescriptionItem
    title={<LoadingBar tone={tone} className="p-2.5 w-40" />}
    content={<LoadingBar tone={tone} className="p-3 w-full" />}
    variant={SectionDescriptionItemVariant.loaded}
  />
)

const LoadingInput: React.FC<{
  tone?: string
}> = ({ tone }) => (
  <div>
    <LoadingBar tone={tone} className="p-2 w-40" />
    <LoadingBar
      tone={tone}
      className="p-6 mt-1 mb-1 w-full border border-transparent"
    />
  </div>
)

export { LoadingField, LoadingInput }
