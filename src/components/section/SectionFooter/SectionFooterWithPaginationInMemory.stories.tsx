import { Meta, StoryObj } from '@storybook/react'
import {
  Controls,
  Primary,
  Stories,
  Subheading,
  Title,
  Description,
} from '@storybook/addon-docs'
import { IndexType } from '@aboutbits/pagination'
import { useState } from 'react'
import { SectionFooterVariant } from './types'
import {
  SectionFooterWithPaginationInMemory,
  SectionFooterWithPaginationInMemoryProps,
} from './SectionFooterWithPaginationInMemory'

const Template = (args: SectionFooterWithPaginationInMemoryProps) => {
  const [page, setPage] = useState(args.page)
  return (
    <SectionFooterWithPaginationInMemory
      {...args}
      page={page}
      onChangePage={setPage}
    />
  )
}

const meta = {
  component: SectionFooterWithPaginationInMemory,
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
  render: (args) => <Template {...args} />,
} satisfies Meta<typeof SectionFooterWithPaginationInMemory>

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
