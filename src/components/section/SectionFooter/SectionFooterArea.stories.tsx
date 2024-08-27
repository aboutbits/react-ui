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
import { SectionFooterArea } from '../index'
import { SectionFooterVariant } from './types'

const meta = {
  component: SectionFooterArea,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="section" items={['footerArea']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof SectionFooterArea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const VariantTransparent: Story = {
  args: {
    variant: SectionFooterVariant.Transparent,
  },
}
