import { useFormikContext } from 'formik'
import { FormattedMessage } from 'react-intl'

import { Button, Size, Tone, Variant, ButtonProps } from './Button'
import React from 'react'

export interface SubmitButtonProps extends ButtonProps {
  /**
   * Defines the disabling status of a button.
   */
  disabled?: boolean
}

const SubmitButton: React.FC<
  SubmitButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children = <FormattedMessage id="shared.save" />,
  variant = Variant.solid,
  disabled = false,
  tone = Tone.primary,
  size = Size.md,
  ...props
}) => {
  const formik = useFormikContext()

  return (
    <Button
      type="submit"
      variant={variant}
      disabled={formik?.isSubmitting || disabled}
      tone={tone}
      size={size}
      {...props}
    >
      {children}
    </Button>
  )
}

export { SubmitButton }
