import { SectionDescriptionItem } from '../section'
import { LoadingBar } from './LoadingBar'

const LoadingDescriptionItem: React.FC = () => (
  <SectionDescriptionItem
    title={<LoadingBar className="p-2.5 w-40" />}
    content={<LoadingBar className="p-3 w-full" />}
  />
)

const LoadingInput: React.FC = () => (
  <div>
    <LoadingBar className="p-2 w-40" />
    <LoadingBar className="p-6 mt-1 mb-1 w-full border border-transparent" />
  </div>
)

export { LoadingDescriptionItem, LoadingInput }
