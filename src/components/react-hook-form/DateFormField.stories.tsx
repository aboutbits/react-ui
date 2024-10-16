import IconInfoOutlinedFilled from '@aboutbits/react-material-icons/dist/IconInfoOutlinedFilled'
import IconWarningOutlinedFilled from '@aboutbits/react-material-icons/dist/IconWarningOutlinedFilled'
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
import { DateFormField } from './DateFormField'
import { Form } from './Form'

const icons = {
  options: ['None', 'Warning', 'Info'],
  mapping: {
    None: undefined,
    Warning: IconWarningOutlinedFilled,
    Info: IconInfoOutlinedFilled,
  },
}

const meta = {
  component: DateFormField,
  args: {
    name: 'birthDate',
    message: 'If you are a minor, make sure to have parental permission',
    label: 'Birth date',
  },
  argTypes: {
    disabled: { type: 'boolean' },
    iconStart: icons,
    iconEnd: icons,
  },
  decorators: [
    (Story) => {
      const personSchema = z.object({
        birthDate: z.date(),
      })
      type Person = z.infer<typeof personSchema>
      const defaultPerson: DefaultValues<Person> = {
        birthDate: new Date(),
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
} satisfies Meta<typeof DateFormField>

export default meta
type Story = StoryObj<typeof DateFormField>

export const Default: Story = {}
