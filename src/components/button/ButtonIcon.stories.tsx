import IconAddOutlinedFilled from '@aboutbits/react-material-icons/dist/IconAddOutlinedFilled'
import IconInfoOutlinedFilled from '@aboutbits/react-material-icons/dist/IconInfoOutlinedFilled'
import {
  Controls,
  Description,
  Markdown,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Source } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../.storybook/components'
import { Mode, Size, Tone } from '../types'
import { ButtonIcon } from './ButtonIcon'
import { ButtonVariant } from './types'

const icons = {
  options: ['Info', 'Add'],
  mapping: {
    Info: IconInfoOutlinedFilled,
    Add: IconAddOutlinedFilled,
  },
}

const meta = {
  component: ButtonIcon,
  args: {
    disabled: false,
    mode: Mode.Light,
    variant: ButtonVariant.Solid,
    size: Size.Md,
    tone: Tone.Primary,
    icon: IconAddOutlinedFilled,
  },
  argTypes: {
    icon: icons,
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme
            component="button"
            items={['buttonIcon', 'modeVariantTone', 'button']}
          />
          <Markdown>
            Additionally, all the `button.modeVariantTone` themes are used. See
            [Button](/docs/components-button-button--default-story#theme).
          </Markdown>
          <Stories />
          <Source
            code={
              'module.exports = {\n' +
              '  button: {\n' +
              '    variantTone: {\n' +
              '      SOLID: {\n' +
              '        purple:\n' +
              "          'bg-purple-500 hover:bg-purple-600 text-white outline-purple-500',\n" +
              '      },\n' +
              '      GHOST: {\n' +
              '        purple:\n' +
              "          'hover:bg-purple-50 focus:bg-purple-50 border-purple-500 focus:border-transparent text-purple-500 outline-purple-500',\n" +
              '      },\n' +
              '      TRANSPARENT: {\n' +
              "        purple: 'hover:bg-purple-50 text-purple-500 focus:outline-purple-500',\n" +
              '      },\n' +
              '    },\n' +
              '  },\n' +
              '}'
            }
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof ButtonIcon>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Modes: Story = {
  render: (args) => (
    <div className="flex flex-row items-center gap-6">
      <ButtonIcon {...args} mode={Mode.Light} />
      <div className="bg-neutral-700 p-5">
        <ButtonIcon {...args} mode={Mode.Dark} />
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-row items-center gap-6">
      <ButtonIcon {...args} variant={ButtonVariant.Solid} />
      <ButtonIcon {...args} variant={ButtonVariant.Ghost} />
      <ButtonIcon {...args} variant={ButtonVariant.Transparent} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The `Variant` determine if there is a background fill and a border. The `transparent` variant, while being transparent, still keep the same size as the other variants.\n',
      },
    },
  },
}

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-row items-center gap-6">
      <ButtonIcon {...args} size={Size.Sm} />
      <ButtonIcon {...args} size={Size.Md} />
      <ButtonIcon {...args} size={Size.Lg} />
    </div>
  ),
}

export const Tones: Story = {
  render: (args) => (
    <div className="flex flex-row items-center gap-6">
      <ButtonIcon {...args} tone={Tone.Primary} />
      <ButtonIcon {...args} tone={Tone.Neutral} />
      <ButtonIcon {...args} tone={Tone.Success} />
      <ButtonIcon {...args} tone={Tone.Warning} />
      <ButtonIcon {...args} tone={Tone.Critical} />
      <ButtonIcon {...args} tone={Tone.Informative} />
    </div>
  ),
}

/**
 * If the provided colors are not satisfying the needs of a project, it is possible to add your own colors. In the following example, it is moderated what needs to be added to the `reactui.config.js`. See [ReactUI Integrations](https://github.com/aboutbits/react-ui-integrations) for more information.
 */
export const CustomPurple: Story = {
  render: (args) => (
    <ButtonIcon
      {...args}
      className="bg-purple-500 text-white outline-purple-500 hover:bg-purple-600"
    />
  ),
}
