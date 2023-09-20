import {
  Controls,
  Description,
  Markdown,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import IconAdd from '@aboutbits/react-material-icons/dist/IconAdd'
import IconInfo from '@aboutbits/react-material-icons/dist/IconInfo'
import { Source } from '@storybook/blocks'
import { Theme } from '../../../.storybook/components'
import { Mode, Size, Tone } from '../types'
import { ButtonVariant } from './types'
import { ButtonIcon } from './ButtonIcon'

const icons = {
  options: ['Info', 'Add'],
  mapping: {
    Info: IconInfo,
    Add: IconAdd,
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
    icon: IconAdd,
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
          <Theme component="button" items={['buttonIcon']} />
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
          ></Source>
        </>
      ),
    },
  },
} satisfies Meta<typeof ButtonIcon>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

/**
 * The `Mode` determines if the component is placed on LIGHT or DARK background.
 */

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

/**
 * The size determine the padding between the button text and its border.
 */

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-row items-center gap-6">
      <ButtonIcon {...args} size={Size.Sm} />
      <ButtonIcon {...args} size={Size.Md} />
      <ButtonIcon {...args} size={Size.Lg} />
    </div>
  ),
}

/**
 * he tone of the button determine it's background color. Given the prop, the component will look at the Tailwind config to determine its color.
 *
 * For additional information about Tailwind config, please refer to the [Tailwind documentation on colors](https://tailwindcss.com/docs/customizing-colors).
 */
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
