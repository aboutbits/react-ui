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
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import IconInfo from '@aboutbits/react-material-icons/dist/IconInfo'
import { Form } from './Form'
import { NumberFormField } from './NumberFormField'

const icons = {
  options: ['None', 'Warning', 'Info'],
  mapping: {
    None: undefined,
    Warning: IconWarning,
    Info: IconInfo,
  },
}

const meta = {
  component: NumberFormField,
  args: {
    name: 'age',
    message: 'Please enter your real age',
    label: 'Age',
  },
  argTypes: {
    disabled: { type: 'boolean' },
    iconStart: icons,
    iconEnd: icons,
  },
  decorators: [
    (Story) => {
      const personSchema = z.object({
        age: z.number().min(0),
      })
      type Person = z.infer<typeof personSchema>
      const defaultPerson: DefaultValues<Person> = {
        age: 0,
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
} satisfies Meta<typeof NumberFormField>

export default meta
type Story = StoryObj<typeof NumberFormField>

export const Default: Story = {}
