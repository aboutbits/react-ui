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
import { CheckboxFormField } from './CheckboxFormField'
import { Form } from './Form'

const meta = {
  component: CheckboxFormField,
  args: {
    name: 'newsletter',
    label: 'Subscribe me to the newsletter',
    message: 'Read more about our writing policy on the home page',
  },
  argTypes: {
    checked: {
      type: { name: 'boolean', required: false },
    },
    disabled: { type: 'boolean' },
  },
  decorators: [
    (Story) => {
      const subscriptionSchema = z.object({
        newsletter: z.boolean(),
      })
      type Subscription = z.infer<typeof subscriptionSchema>
      const defaultPerson: DefaultValues<Subscription> = {
        newsletter: false,
      }
      const form = useForm<Subscription>({
        resolver: zodResolver(subscriptionSchema),
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
} satisfies Meta<typeof CheckboxFormField>

export default meta
type Story = StoryObj<typeof CheckboxFormField>

export const Default: Story = {}
