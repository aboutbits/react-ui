import { IndexType } from '@aboutbits/pagination'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { SectionFooterWithPaginationRouter } from './SectionFooterWithPaginationRouter'
import { SectionFooterVariant } from './types'

const meta = {
  component: SectionFooterWithPaginationRouter,
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
        </>
      ),
    },
  },
  render: (args) => {
    const currentParams = new URLSearchParams(window.parent.location.search)
    const pageParam = currentParams.get('page')
    const currentPage = pageParam ? parseInt(pageParam) : 0
    return <SectionFooterWithPaginationRouter {...args} page={currentPage} />
  },
} satisfies Meta<typeof SectionFooterWithPaginationRouter>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    page: 0,
    size: 10,
    total: 60,
    config: { indexType: IndexType.ZERO_BASED },
  },
}

export const VariantTransparent: Story = {
  args: {
    ...Default.args,
    variant: SectionFooterVariant.Transparent,
  },
}
