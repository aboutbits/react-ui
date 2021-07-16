import IconDelete from '@aboutbits/react-material-icons/dist/IconDelete'
import { Button, ButtonProps, Tone, Variant } from './Button'
import React from 'react'

const DeleteButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Button
        variant={Variant.transparent}
        tone={Tone.critical}
        {...props}
        ref={ref}
      >
        <div className="flex justify-center items-center">
          <IconDelete className="mr-1 h-4 fill-current" />
          {children}
        </div>
      </Button>
    )
  }
)

DeleteButton.displayName = 'DeleteButton'

export { DeleteButton }
