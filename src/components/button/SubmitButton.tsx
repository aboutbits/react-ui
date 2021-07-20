import { useFormikContext } from 'formik'
import { FormattedMessage } from 'react-intl'

import { Button, ButtonProps } from './Button'
import React from 'react'

const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children = <FormattedMessage id="shared.save" />,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const formik = useFormikContext()

    return (
      <Button
        type="submit"
        disabled={formik?.isSubmitting || disabled}
        {...props}
        ref={ref}
      >
        {children}
      </Button>
    )
  }
)

// This improves readability in dev tools
SubmitButton.displayName = 'SubmitButton'

export { SubmitButton }
