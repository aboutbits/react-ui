import {
  Title,
  Primary,
  Stories,
  Subheading,
  Controls,
} from '@storybook/addon-docs'
import { Description } from '@storybook/blocks'
import { z } from 'zod'
import { DefaultValues, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { Form } from './Form'
import { TextAreaFormField } from './TextAreaFormField'

const meta = {
  component: TextAreaFormField,
  args: {
    name: 'bio',
    label: 'Bio',
    message: 'Say something about yourself',
    placeholder: 'Bio',
  },
  argTypes: {
    disabled: { type: 'boolean' },
    required: { type: 'boolean' },
  },
  decorators: [
    (Story) => {
      const personSchema = z.object({
        bio: z.string(),
      })
      type Person = z.infer<typeof personSchema>
      const defaultPerson: DefaultValues<Person> = {
        bio: 'Mechanical engineer with an appreciation for artworks',
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
} satisfies Meta<typeof TextAreaFormField>

export default meta
type Story = StoryObj<typeof TextAreaFormField>

export const Default: Story = {}
