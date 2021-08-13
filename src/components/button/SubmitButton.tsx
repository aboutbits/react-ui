import { useFormikContext } from 'formik'

import React from 'react'
import { Button, ButtonProps } from './Button'

const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled = false, ...props }, ref) => {
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
