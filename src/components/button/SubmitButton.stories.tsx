import { SubmitButton } from './SubmitButton'
import { action } from '@storybook/addon-actions'
import {
  Controls,
  Description,
  Markdown,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Source } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { Form } from '../react-hook-form'
import { useForm } from 'react-hook-form'
import IconAdd from '@aboutbits/react-material-icons/dist/IconAdd'
import IconInfo from '@aboutbits/react-material-icons/dist/IconInfo'

const meta = {
  component: SubmitButton,
  argTypes: {
    iconStart: {
      options: ['None', 'Add', 'Info'],
      mapping: { None: undefined, Add: IconAdd, Info: IconInfo },
      control: { type: 'select' },
    },
    iconEnd: {
      options: ['None', 'Add', 'Info'],
      mapping: { None: undefined, Add: IconAdd, Info: IconInfo },
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Markdown>
            The **_default values_** for variant, size, and tone can be found in
            the [Button Section](/docs/components-button-button--default-story).
            The submit button uses `React Hook Form` to automatically disable
            during submitting. When the submit button is not placed inside a
            form (i.e. it has no form context), you can use the `formControl`
            prop to pass the control of the form.
          </Markdown>
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  decorators: [
    (Story) => {
      const form = useForm()
      const onSubmit = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        alert("You've submitted the form successfully!")
      }
      return (
        <Form form={form} onSubmit={onSubmit}>
          <Story />
        </Form>
      )
    },
  ],
} satisfies Meta<typeof SubmitButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <SubmitButton {...args}>Submit</SubmitButton>
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Submit',
  },
}
