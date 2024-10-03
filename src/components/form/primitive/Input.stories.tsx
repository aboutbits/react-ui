import {
  IconBadgeOutlinedFilled,
  IconSearchOutlinedFilled,
} from '@aboutbits/react-material-icons'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../../.storybook/components'
import { FormTone, FormVariant } from '../types'
import { Input } from './Input'

const meta = {
  component: Input,
  args: {
    name: 'name',
    placeholder: '',
    disabled: false,
    iconStart: undefined,
    iconEnd: undefined,
  },
  argTypes: {
    iconStart: {
      options: ['None', 'Search', 'Badge'],
      mapping: {
        None: undefined,
        Search: IconSearchOutlinedFilled,
        Badge: IconBadgeOutlinedFilled,
      },
      control: { type: 'select' },
    },
    iconEnd: {
      options: ['None', 'Search', 'Badge'],
      mapping: {
        None: undefined,
        Search: IconSearchOutlinedFilled,
        Badge: IconBadgeOutlinedFilled,
      },
      control: { type: 'select' },
    },
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
          <Theme component="form" items={['input']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Variant: Story = {
  render: (args) => (
    <div className="flex flex-row space-x-4">
      <Input {...args} variant={FormVariant.Ghost} placeholder="Ghost" />
      <Input {...args} variant={FormVariant.Soft} placeholder="Soft" />
      <Input {...args} variant={FormVariant.Solid} placeholder="Solid" />
      <Input
        {...args}
        variant={FormVariant.Transparent}
        placeholder="Transparent"
      />
    </div>
  ),
}

export const Tone: Story = {
  render: (args) => (
    <div className="flex flex-row space-x-4">
      <Input {...args} tone={FormTone.Neutral} placeholder="Neutral" />
      <Input {...args} tone={FormTone.Critical} placeholder="Critical" />
    </div>
  ),
}

export const IconsOutlinedFilled: Story = {
  render: (args) => (
    <div className="flex flex-row space-x-4">
      <Input
        {...args}
        iconStart={IconSearchOutlinedFilled}
        placeholder="Search"
      />
      <Input {...args} iconEnd={IconBadgeOutlinedFilled} placeholder="Badge" />
    </div>
  ),
}
