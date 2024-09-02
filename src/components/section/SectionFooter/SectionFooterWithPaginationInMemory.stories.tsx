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
import { useState } from 'react'
import {
  SectionFooterWithPaginationInMemory,
  SectionFooterWithPaginationInMemoryProps,
} from './SectionFooterWithPaginationInMemory'
import { SectionFooterVariant } from './types'

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
