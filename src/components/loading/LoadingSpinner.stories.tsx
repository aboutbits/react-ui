import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { LoadingSpinner } from './LoadingSpinner'

const meta: Meta<typeof LoadingSpinner> = {
  title: 'Components/Loading/LoadingSpinner',
  component: LoadingSpinner,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
}

export default meta
type Story = StoryObj<typeof LoadingSpinner>

export const Default: Story = {
  args: { className: 'w-8 h-8' },
}

export const Large: Story = {
  args: {
    className: 'w-12 h-12',
  },
}

export const CustomColor: Story = {
  render: () => (
    <div className="flex space-x-4">
      <LoadingSpinner className="size-8 text-critical-500" />
      <LoadingSpinner className="size-8 text-primary-500" />
      <LoadingSpinner className="size-8 text-success-500" />
      <LoadingSpinner className="size-8 text-warning-500" />
      <LoadingSpinner className="size-8 text-informative-500" />
    </div>
  ),
}

export const AsButtonIcon: Story = {
  render: () => (
    <Button iconStart={LoadingSpinner} disabled>
      Loading...
    </Button>
  ),
}
