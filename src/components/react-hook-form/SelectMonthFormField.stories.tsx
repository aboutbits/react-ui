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
import { zodMonth } from '../form'
import { Form } from './Form'
import { SelectMonthFormField } from './SelectMonthFormField'

const meta = {
  component: SelectMonthFormField,
  args: {
    name: 'month',
    label: 'Month of birth',
  },
  argTypes: {
    disabled: { type: 'boolean' },
    required: { type: 'boolean' },
  },
  decorators: [
    (Story) => {
      const personSchema = z.object({
        month: zodMonth,
      })
      type Person = z.infer<typeof personSchema>
      const defaultPerson: Person = {
        month: 'JANUARY',
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
} satisfies Meta<typeof SelectMonthFormField>

export default meta
type Story = StoryObj<typeof SelectMonthFormField>

export const Default: Story = {}
