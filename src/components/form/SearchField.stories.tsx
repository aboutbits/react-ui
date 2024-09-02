import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import {
  InternationalizationMessages,
  Theme,
} from '../../../.storybook/components'
import { Section, SectionHeaderArea } from '../section'
import { SearchField } from './SearchField'

const meta = {
  component: SearchField,
  argTypes: {
    disabled: { type: 'boolean' },
  },
  decorators: [
    (Story) => {
      return (
        <Section>
          <SectionHeaderArea>
            <Story />
          </SectionHeaderArea>
        </Section>
      )
    },
  ],
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
          <InternationalizationMessages items={['search.placeholder']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof SearchField>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
