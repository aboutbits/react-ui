import {
  SectionDescriptionItem,
  SectionDescriptionItemVariant,
} from '../section'
import { LoadingBar } from './LoadingBar'
import { ToneProps } from './type'

type LoadingFieldProps = ToneProps

const LoadingField: React.FC<LoadingFieldProps> = ({ backgroundColor }) => (
  <SectionDescriptionItem
    title={
      <LoadingBar backgroundColor={backgroundColor} className="p-2.5 w-40" />
    }
    content={
      <LoadingBar backgroundColor={backgroundColor} className="p-3 w-full" />
    }
    variant={SectionDescriptionItemVariant.loaded}
  />
)

const LoadingInput: React.FC<LoadingFieldProps> = ({ backgroundColor }) => (
  <div>
    <LoadingBar backgroundColor={backgroundColor} className="p-2 w-40" />
    <LoadingBar
      backgroundColor={backgroundColor}
      className="p-6 mt-1 mb-1 w-full border border-transparent"
    />
  </div>
)

export { LoadingField, LoadingInput }
