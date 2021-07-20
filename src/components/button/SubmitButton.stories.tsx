import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Formik, Field, Form } from 'formik'
import { SubmitButton } from './SubmitButton'

export default {
  title: 'Components/Button/Submit',
  component: SubmitButton,
} as ComponentMeta<typeof SubmitButton>

const Template: ComponentStory<typeof SubmitButton> = (args) => (
  <Formik
    initialValues={{ name: '', email: '' }}
    onSubmit={async (values) => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
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
