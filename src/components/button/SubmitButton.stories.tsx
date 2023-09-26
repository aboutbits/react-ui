import {
  Controls,
  Description,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import IconAdd from '@aboutbits/react-material-icons/dist/IconAdd'
import IconInfo from '@aboutbits/react-material-icons/dist/IconInfo'
import { Form } from '../react-hook-form'
import { SubmitButton } from './SubmitButton'

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
          <Description />
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
