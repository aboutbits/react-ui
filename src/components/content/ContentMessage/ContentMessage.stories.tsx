import { ContentMessage } from './ContentMessage'
import IconInfo from '@aboutbits/react-material-icons/dist/IconInfo'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import IconError from '@aboutbits/react-material-icons/dist/IconError'
import {
  Controls,
  Description,
  Markdown,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Theme } from '../../../../.storybook/components'
import { Meta, StoryObj } from '@storybook/react'
import { Tone } from '../../types'
import React from 'react'

const meta = {
  component: ContentMessage,
  args: {
    title: 'No items',
    text: 'No data available for this view',
    icon: IconInfo,
  },
  argTypes: {
    icon: {
      options: ['None', 'Info', 'Warning', 'Error'],
      mapping: {
        None: undefined,
        Info: IconInfo,
        Warning: IconWarning,
        Error: IconError,
      },
      control: { type: 'select' },
    },
    tone: {
      options: Object.values(Tone),
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Markdown>
            This component renders a message with icon in the given tone. It can
            be used to create a warning or error message inside a section.
          </Markdown>
          <Subheading>Subcomponents</Subheading>
          It is composed of the following components, which can also be used
          separately for custom purposes:
          <ul>
            <li>ContentMessageContainer</li>
            <li>ContentMessageIcon</li>
            <li>ContentMessageTitle</li>
            <li>ContentMessageText</li>
          </ul>
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="content" items={['message']} />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof ContentMessage>

export default meta

type Story = StoryObj<typeof ContentMessage>

export const Default: Story = {}

export const Tones: Story = {
  render: (args) => (
    <div className="flex flex-row gap-2">
      <ContentMessage {...args} tone={Tone.Primary} title="Primary" />
      <ContentMessage {...args} tone={Tone.Informative} title="Informative" />
      <ContentMessage {...args} tone={Tone.Success} title={'Success'} />
      <ContentMessage {...args} tone={Tone.Warning} title="Warning" />
      <ContentMessage {...args} tone={Tone.Critical} title="Critical" />
    </div>
  ),
}
