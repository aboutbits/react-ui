import { zodResolver } from '@hookform/resolvers/zod'
import { action } from '@storybook/addon-actions'
import {
  Controls,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Description } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form } from './Form'
import { SelectYearFormField } from './SelectYearFormField'

const meta = {
  component: SelectYearFormField,
  args: {
    name: 'year',
    label: 'Year of birth',
    from: 2018,
    to: new Date().getFullYear(),
  },
  argTypes: {
    disabled: { type: 'boolean' },
    required: { type: 'boolean' },
  },
  decorators: [
    (Story) => {
      const personSchema = z.object({
        year: z.number(),
      })
      type Person = z.infer<typeof personSchema>
      const defaultPerson: Person = {
        year: 2018,
      }
      const form = useForm<Person>({
        resolver: zodResolver(personSchema),
        defaultValues: defaultPerson,
      })
      return (
        <Form form={form} onSubmit={action('onSubmit')}>
          <Story />
        </Form>
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
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof SelectYearFormField>

export default meta
type Story = StoryObj<typeof SelectYearFormField>

export const Default: Story = {}
