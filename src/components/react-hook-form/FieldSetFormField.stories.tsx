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
import { FieldSetFormField } from './FieldSetFormField'
import { RadioFormField } from './RadioFormField'

const YES_NO = ['YES', 'NO'] as const
const yesNoSchema = z.enum(YES_NO)

const meta = {
  component: FieldSetFormField,
  args: {
    label: 'Do you like this component?',
    fields: ['like'],
    children: (
      <div className="mt-4 flex flex-col gap-x-4 gap-y-2 sm:flex-row">
        {YES_NO.map((value) => (
          <RadioFormField
            key={value}
            name="like"
            label={value.charAt(0) + value.slice(1).toLowerCase()}
            value={value}
          />
        ))}
      </div>
    ),
  },
  argTypes: {
    disabled: { type: 'boolean' },
  },
  decorators: [
    (Story) => {
      const formSchema = z.object({
        like: yesNoSchema,
      })
      type FormValues = z.infer<typeof formSchema>
      const defaultValues: FormValues = {
        like: 'YES',
      }
      const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues,
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
} satisfies Meta<typeof FieldSetFormField>

export default meta
type Story = StoryObj<typeof FieldSetFormField>

export const Default: Story = {}
