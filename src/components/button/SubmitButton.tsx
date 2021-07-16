import { useFormikContext } from 'formik'
import { FormattedMessage } from 'react-intl'

import { Button, Variant } from './Button'

const SubmitButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }
> = ({
  children = <FormattedMessage id="shared.save" />,
  variant = Variant.solid,
  disabled,
  ...props
}) => {
  const formik = useFormikContext()

  return (
    <Button
      type="submit"
      variant={variant}
      disabled={formik.isSubmitting || disabled}
      {...props}
    >
      {children}
    </Button>
  )
}

export { SubmitButton }
