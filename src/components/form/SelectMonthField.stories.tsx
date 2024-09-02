import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { InternationalizationMessages } from '../../../.storybook/components'
import { SelectMonthField } from './SelectMonthField'

const meta = {
  component: SelectMonthField,
  args: {
    label: 'Month of birth',
  },
  argTypes: {
    disabled: { type: 'boolean' },
    required: { type: 'boolean' },
    hideRequired: { type: 'boolean' },
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
          <Stories />
          <InternationalizationMessages
            items={[
              'month.january',
              'month.february',
              'month.march',
              'month.april',
              'month.may',
              'month.june',
              'month.july',
              'month.august',
              'month.september',
              'month.october',
              'month.november',
              'month.december',
            ]}
          />
        </>
      ),
    },
  },
} satisfies Meta<typeof SelectMonthField>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
