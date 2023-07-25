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
import { FieldsetFormField } from './FieldsetFormField'
import { RadioFormField } from './RadioFormField'

const YES_NO = ['YES', 'NO'] as const
const yesNoSchema = z.enum(YES_NO)

const meta = {
  component: FieldsetFormField,
  args: {
    label: 'Do you like this component?',
    fields: ['like'],
    children: (
      <div className="flex flex-col sm:flex-row gap-y-2 gap-x-4 mt-4">
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
} satisfies Meta<typeof FieldsetFormField>

export default meta
type Story = StoryObj<typeof FieldsetFormField>

export const Default: Story = {}
