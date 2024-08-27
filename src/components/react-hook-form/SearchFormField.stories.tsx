import { action } from '@storybook/addon-actions'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import {
  InternationalizationMessages,
  Theme,
} from '../../../.storybook/components'
import { Section, SectionHeaderArea } from '../section'
import { Form } from './Form'
import { SearchFormField } from './SearchFormField'

const meta = {
  component: SearchFormField,
  argTypes: {
    disabled: { type: 'boolean' },
  },
  decorators: [
    (Story) => {
      const form = useForm({
        defaultValues: { search: '' },
      })
      return (
        <Section>
          <SectionHeaderArea>
            <Form form={form} onSubmit={action('onSubmit')}>
              <Story />
            </Form>
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
} satisfies Meta<typeof SearchFormField>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
