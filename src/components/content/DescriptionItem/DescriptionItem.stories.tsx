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
import { Section, SectionContainer, SectionContent } from '../../section'
import { DescriptionItem } from './DescriptionItem'

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
          <Subheading>Subcomponents</Subheading>
          It is composed of the following components, which can also be used
          separately for custom purposes:
          <ul>
            <li>DescriptionItemContainer</li>
            <li>DescriptionItemTitle</li>
            <li>DescriptionItemContent</li>
          </ul>
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
