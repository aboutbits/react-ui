import React from 'react'
import { ComponentStory } from '@storybook/react'
import { Formik, Field, Form } from 'formik'
import { SubmitButton } from './SubmitButton'

let domain = ''

if (process.env.NODE_ENV === 'production') {
  domain = 'https://storybook.aboutbits.it'
} else if (process.env.NODE_ENV === 'development') {
  domain = 'http://localhost:4000'
}

export default {
  title: 'Components/Button/Submit',
  component: SubmitButton,
  parameters: {
    docs: {
      description: {
        component:
          `The ***default values*** for variant, size, and tone can be found in the [Base/Button](${domain}/path?path=/docs/components-button-base--default) section. <br>` +
          'The submit button works with `formik` so that it is automatically disabled after being pressed. <br>',
      },
    },
  },
}

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <Formik
    initialValues={{ name: '', email: '' }}
    onSubmit={async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      alert(JSON.stringify(values, null, 2))
    }}
  >
    <Form>
      <Field name="name" type="text" />
      <Field name="email" type="email" />
      <SubmitButton {...args} />
    </Form>
  </Formik>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Submit!',
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Submit!',
  disabled: true,
}
