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
import { DefaultValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Option } from '../form'
import { Form } from './Form'
import { SelectFormField } from './SelectFormField'

const roleSchema = z.enum(['ADMIN', 'USER'])

const meta = {
  component: SelectFormField,
  args: {
    name: 'role',
    label: 'Role',
    message: 'Your role inside the department',
    children: [
      ...roleSchema.options.map((role) => (
        <Option key={role} value={role}>
          {role.charAt(0) + role.slice(1).toLowerCase()}
        </Option>
      )),
    ],
  },
  argTypes: {
    disabled: { type: 'boolean' },
    required: { type: 'boolean' },
  },
  decorators: [
    (Story) => {
      const personSchema = z.object({
        role: roleSchema,
      })
      type Person = z.infer<typeof personSchema>
      const defaultPerson: DefaultValues<Person> = {
        role: roleSchema.enum.USER,
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
} satisfies Meta<typeof SelectFormField>

export default meta
type Story = StoryObj<typeof SelectFormField>

export const Default: Story = {}
