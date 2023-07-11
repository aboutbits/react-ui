import { Markdown } from '@storybook/blocks'
import { SourceJson, SourceJsonProps } from './SourceJson'

export const CustomTheme = ({ obj }: SourceJsonProps) => (
  <>
    <Markdown>
      If the provided tones are not enough for your project, you can add your
      own tones. See [ReactUI
      Integrations](https://github.com/aboutbits/react-ui-integrations) on how
      to configure this in the config file `reactui.config.js`.
    </Markdown>
    <SourceJson obj={obj} />
  </>
)
