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
import { LoadingDescriptionItem } from './LoadingDescriptionItem'

const meta = {
  component: LoadingDescriptionItem,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="content" items={['loadingDescriptionItem']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof LoadingDescriptionItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
