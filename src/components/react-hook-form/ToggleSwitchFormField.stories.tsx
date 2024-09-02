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
import { Form } from './Form'
import { ToggleSwitchFormField } from './ToggleSwitchFormField'

const meta = {
  component: ToggleSwitchFormField,
  args: {
    name: 'airplaneMode',
    label: 'Airplane mode',
    message: 'Turn on to disable all network connections',
  },
  argTypes: {
    disabled: { type: 'boolean' },
  },
  decorators: [
    (Story) => {
      const settingsSchema = z.object({
        airplaneMode: z.boolean(),
      })
      type Settings = z.infer<typeof settingsSchema>
      const defaultSettings: DefaultValues<Settings> = {
        airplaneMode: false,
      }
      const form = useForm<Settings>({
        resolver: zodResolver(settingsSchema),
        defaultValues: defaultSettings,
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
} satisfies Meta<typeof ToggleSwitchFormField>

export default meta
type Story = StoryObj<typeof ToggleSwitchFormField>

export const Default: Story = {}
