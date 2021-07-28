import { Form as FormikForm } from 'formik'

export const Form: React.FC = ({ children }) => (
  <FormikForm className="space-y-8 lg:space-y-10">{children}</FormikForm>
)
