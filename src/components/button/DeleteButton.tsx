import IconDelete from '@aboutbits/react-material-icons/dist/IconDelete'
import { Button, Size, Variant } from './Button'
import React from 'react'

const DeleteButton: React.FC<{ onClick: () => void; size?: Size }> = ({
  onClick,
  children,
  size = Size.md,
}) => {
  return (
    <Button variant={Variant.delete} size={size} onClick={onClick}>
      <div className="flex justify-center items-center">
        <IconDelete className="mr-1 h-4 fill-current" />
        {children}
      </div>
    </Button>
  )
}

export { DeleteButton }
