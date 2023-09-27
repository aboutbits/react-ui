import { DescriptionItem } from './DescriptionItem'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Theme } from '../../../../.storybook/components'
import { Meta, StoryObj } from '@storybook/react'
import { Section, SectionContainer, SectionContent } from '../../section'

const meta = {
  component: DescriptionItem,
  args: {
    title: 'Name',
    content: 'John Doe',
    hideIfEmpty: false,
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
            component="content"
            items={['descriptionItem', 'descriptionItemTitle']}
          />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof DescriptionItem>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const HideIfEmpty: Story = {
  args: {
    hideIfEmpty: true,
    content: null,
  },
}

export const UsageWithSection: Story = {
  render: (args) => (
    <Section>
      <SectionContainer>
        <SectionContent>
          <DescriptionItem {...args} />
        </SectionContent>
      </SectionContainer>
    </Section>
  ),
}
