import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../../.storybook/components/Theme'
import { Button, ButtonVariant } from '../../button'
import { Tone } from '../../types'
import { Section } from './Section'
import { SectionAppendix } from './SectionAppendix'
import { SectionContainer } from './SectionContainer'
import { SectionContent } from './SectionContent'

const meta = {
  title: 'components/section/SectionAppendix',
  component: SectionAppendix,
  args: {
    children: (
      <Button tone={Tone.Neutral} variant={ButtonVariant.Transparent}>
        Button inside the appendix
      </Button>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <Section>
          <SectionContainer>
            <SectionContent>Section container</SectionContent>
          </SectionContainer>
          <Story />
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
          <Theme component="section" items={['appendix']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof SectionAppendix>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
