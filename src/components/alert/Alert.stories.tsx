import IconCheckOutlinedFilled from '@aboutbits/react-material-icons/dist/IconCheckOutlinedFilled'
import IconInfoOutlinedFilled from '@aboutbits/react-material-icons/dist/IconInfoOutlinedFilled'
import IconWarningOutlinedFilled from '@aboutbits/react-material-icons/dist/IconWarningOutlinedFilled'
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
import { Button, ButtonVariant } from '../button'
import { Size, Tone } from '../types'
import { Alert } from './Alert'
import {
  AlertCritical,
  AlertInformative,
  AlertSuccess,
  AlertWarning,
} from './ConvenientAlerts'
import { AlertActionsPosition } from './types'

const icons = {
  options: ['None', 'Warning', 'Check', 'Info'],
  mapping: {
    None: undefined,
    Warning: IconWarningOutlinedFilled,
    Check: IconCheckOutlinedFilled,
    Info: IconInfoOutlinedFilled,
  },
  control: { type: 'select' },
}
const DissmissCriticalButton = (
  <Button
    variant={ButtonVariant.Transparent}
    size={Size.Sm}
    tone={Tone.Critical}
  >
    Dismiss
  </Button>
)

const DissmissSuccessButton = (
  <Button
    variant={ButtonVariant.Transparent}
    size={Size.Sm}
    tone={Tone.Success}
  >
    Dismiss
  </Button>
)

const YesNoCriticalButtons = (
  <>
    <Button
      variant={ButtonVariant.Transparent}
      size={Size.Sm}
      tone={Tone.Critical}
    >
      Yes
    </Button>
    <Button
      variant={ButtonVariant.Transparent}
      size={Size.Sm}
      tone={Tone.Critical}
    >
      No
    </Button>
  </>
)

const actions = {
  options: ['None', 'DismissCritical', 'YesNoCritical'],
  mapping: {
    None: undefined,
    DismissCritical: DissmissCriticalButton,
    YesNoCritical: YesNoCriticalButtons,
  },
  control: { type: 'select' },
}

const meta = {
  component: Alert,
  title: 'Components/Alert/Alert',
  args: {
    children:
      'This alert component can be used to highlight a message to the user.',
    tone: Tone.Critical,
    icon: IconWarningOutlinedFilled,
  },
  argTypes: {
    title: { control: 'text' },
    icon: icons,
    actions,
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Markdown>
            This alert component can be used to highlight a message to the user.
            It supports different types of tones. It is possible to specify an
            icon, a title, actions and the position of the actions. The library
            also provides convenient alert components with predefined tone and
            icon.
          </Markdown>
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="alert" />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof Alert>

export const Default: Story = {}

export const Tones: Story = {
  args: {
    icon: undefined,
  },
  render: (args) => (
    <div className="flex flex-row space-x-4">
      <Alert {...args} tone={Tone.Primary}>
        Primary message
      </Alert>
      <Alert {...args} tone={Tone.Neutral}>
        Neutral message
      </Alert>
      <Alert {...args} tone={Tone.Warning}>
        Warning message
      </Alert>
      <Alert {...args} tone={Tone.Critical}>
        Critical message
      </Alert>
      <Alert {...args} tone={Tone.Success}>
        Success message
      </Alert>
      <Alert {...args} tone={Tone.Informative}>
        Informative message
      </Alert>
    </div>
  ),
}

export const ConvinientAlertComponents: Story = {
  render: () => (
    <div className="flex flex-row space-x-4">
      <AlertSuccess>Success message</AlertSuccess>
      <AlertWarning>Warning message</AlertWarning>
      <AlertCritical>Critical message</AlertCritical>
      <AlertInformative>Informative message</AlertInformative>
    </div>
  ),
  parameters: {
    controls: {
      disable: true,
    },
  },
}

export const ActionsResponsive: Story = {
  args: {
    icon: IconCheckOutlinedFilled,
    tone: Tone.Success,
    actions: DissmissSuccessButton,
    actionsPosition: AlertActionsPosition.Responsive,
  },
  render: (args) => (
    <Alert {...args}>
      Success message with actions <b>responsive</b>
    </Alert>
  ),
  argTypes: {
    children: { control: { disabled: true } },
  },
}

export const ActionsFixedRight: Story = {
  args: {
    icon: IconCheckOutlinedFilled,
    tone: Tone.Success,
    actions: DissmissSuccessButton,
    actionsPosition: AlertActionsPosition.FixedRight,
  },
  render: (args) => (
    <Alert {...args}>
      Success message with actions <b>fixed to the right</b>
    </Alert>
  ),
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export const ActionsFixedBottom: Story = {
  args: {
    icon: IconCheckOutlinedFilled,
    tone: Tone.Success,
    actions: DissmissSuccessButton,
    actionsPosition: AlertActionsPosition.FixedBottom,
  },
  render: (args) => (
    <Alert {...args}>
      Success message with actions <b>fixed to the right</b>
    </Alert>
  ),
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export const VeryLongMessage: Story = {
  args: {
    icon: IconWarningOutlinedFilled,
    tone: Tone.Critical,
  },
  render: (args) => (
    <Alert {...args}>
      Duis mauris ligula, aliquam id maximus at, aliquam ut dui. Morbi ac neque
      mattis libero cursus lobortis quis ac urna. Nullam vel augue vitae lacus
      fermentum ullamcorper eu eget sapien.
    </Alert>
  ),
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export const WithTitle: Story = {
  args: { title: 'This is the title' },
}
