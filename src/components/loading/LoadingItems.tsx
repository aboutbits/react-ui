import { SectionDescriptionItem } from '../section'
import { LoadingBar } from './LoadingBar'

type LoadingFieldProps = {
  /**
   * Defines the background color of the bar. It uses the tailwind background notation `bg-${backgroundColor}` under the hood.
   */
  backgroundColor?: string
}

const LoadingField: React.FC<LoadingFieldProps> = ({ backgroundColor }) => (
  <SectionDescriptionItem
    title={
      <LoadingBar backgroundColor={backgroundColor} className="p-2.5 w-40" />
    }
    content={
      <LoadingBar backgroundColor={backgroundColor} className="p-3 w-full" />
    }
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
