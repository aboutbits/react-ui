import {
  SectionDescriptionItem,
  SectionDescriptionItemVariant,
} from '../section'
import { LoadingBar } from './LoadingBar'

export interface LoadingFieldProps {
  variant?: SectionDescriptionItemVariant
  tone?: string
}

const LoadingField: React.FC<LoadingFieldProps> = ({ tone, variant }) => (
  <SectionDescriptionItem
    title={
      <LoadingBar tone={tone} className="p-2.5 w-40">
        test
      </LoadingBar>
    }
    content={
      <LoadingBar tone={tone} className="p-3 w-full">
        test
      </LoadingBar>
    }
    variant={variant}
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
