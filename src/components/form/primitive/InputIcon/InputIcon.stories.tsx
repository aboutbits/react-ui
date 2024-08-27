import IconBadge from '@aboutbits/react-material-icons/dist/IconBadge'
import IconSearch from '@aboutbits/react-material-icons/dist/IconSearch'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../../../.storybook/components'
import { InputIcon } from './InputIcon'
import { IconPosition } from './types'

const meta = {
  component: InputIcon,
  args: {
    icon: IconSearch,
    position: IconPosition.Start,
  },
  argTypes: {
    icon: {
      options: ['Search', 'Badge'],
      mapping: {
        Search: IconSearch,
        Badge: IconBadge,
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
} satisfies Meta<typeof InputIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
