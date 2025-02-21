import {
  Controls,
  Markdown,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../../.storybook/components'
import { BreadcrumbLink } from './BreadcrumbLink'
import { BreadcrumbLoading } from './BreadcrumbLoading'
import { Breadcrumbs } from './Breadcrumbs'
import { BreadcrumbsLoading } from './BreadcrumbsLoading'
import { BreadcrumbText } from './BreadcrumbText'

const meta = {
  component: Breadcrumbs,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Markdown>
            These components render breadcrumbs, which can be used as a
            secondary navigation that helps to see the users location.
            Typically, you use the `BreadcrumbLink` component for the parent
            links and the `BreadcrumbText` component for the current page. You
            can use the `BreadcrumbLoading` component or the
            `BreadcrumbsLoading` component to show a loading state.
          </Markdown>
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme
            component="breadcrumbs"
            items={[
              'breadcrumbs',
              'breadcrumbLink',
              'breadcrumbText',
              'breadcrumbLoading',
            ]}
          />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Breadcrumbs>

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <BreadcrumbLink href="#">Start</BreadcrumbLink>
      <BreadcrumbLink href="#">User</BreadcrumbLink>
      <BreadcrumbText>Settings</BreadcrumbText>
    </Breadcrumbs>
  ),
}

export const LoadingDefault: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbsLoading numberOfItems={3} />
    </Breadcrumbs>
  ),
}

export const LoadingCustom: Story = {
  render: () => (
    <Breadcrumbs>
      <BreadcrumbLoading loadingBarProps={{ className: 'w-10!' }} />
      <BreadcrumbLoading />
      <BreadcrumbText>Settings</BreadcrumbText>
    </Breadcrumbs>
  ),
}
