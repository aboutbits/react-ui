import IconBadge from '@aboutbits/react-material-icons/dist/IconBadgeRounded'
import IconSearch from '@aboutbits/react-material-icons/dist/IconSearchRounded'
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
import { InputFormField } from './InputFormField'

const icons = {
  options: ['None', 'Badge', 'Search'],
  mapping: {
    None: undefined,
    Badge: IconBadge,
    Search: IconSearch,
  },
}

const meta = {
  component: InputFormField,
  args: {
    name: 'nickname',
    message: 'You cannot change your nickname once set',
    label: 'Nickname',
  },
  argTypes: {
    disabled: { type: 'boolean' },
    iconEnd: icons,
  },
  decorators: [
    (Story) => {
      const personSchema = z.object({
        nickname: z.string(),
      })
      type Person = z.infer<typeof personSchema>
      const defaultPerson: DefaultValues<Person> = {
        nickname: 'Joe',
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
} satisfies Meta<typeof InputFormField>

export default meta
type Story = StoryObj<typeof InputFormField>

export const Default: Story = {}
