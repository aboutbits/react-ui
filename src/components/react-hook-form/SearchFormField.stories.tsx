import { Meta, StoryObj } from '@storybook/react'
import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/blocks'
import { action } from '@storybook/addon-actions'
import { useForm } from 'react-hook-form'
import {
  InternationalizationMessages,
  Theme,
} from '../../../.storybook/components'
import { Section, SectionHeaderArea } from '../section'
import { SearchFormField } from './SearchFormField'
import { Form } from './Form'

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
