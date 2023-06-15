import { ReactElement, ReactNode, useRef, useState } from 'react'
import { useController } from 'react-hook-form'
import { DialogProps } from '../../dialog'
import { ClassNameProps, ModeProps } from '../../types'
import { VariantProps } from '../../form/types'
import {
  SelectItemDialogWithSearch,
  SelectItemDialogWithSearchProps,
} from './SelectItemDialogWithSearch'
import { SelectItemInput } from './SelectItemInput'

export type SelectItemFormFieldProps<ItemType, Error> = {
  id: string
  name: string
  /**
   * The initialItem allows you to pass the component the lookup object on first render.
   * Afterwards on changed selection the component will handle it by itself.
   */
  initialItem?: ItemType
  /**
   * Specify what you want to render in the input, once a value has been selected.
   * If nothing is specified it will try to render it the same way as the list item.
   *
   * If no lookup value is available, it will render the id.
   */
  renderInputValue?: (item: ItemType) => ReactNode
  dialogTitle: ReactNode
  dialogLabel: string
  /**
   * To configure the dialog in more detail you can pass dialog props.
   */
  dialogProps?: DialogProps
  label: string
  placeholder: string
  disabled?: boolean
  /**
   * This function will be used to extract the id value from the selected item.
   * @param item
   */
  extractIdFromItem: (item: ItemType) => string
} & ModeProps &
  VariantProps &
  ClassNameProps &
  Pick<
    SelectItemDialogWithSearchProps<ItemType, Error>,
    | 'useGetData'
    | 'noSearchResults'
    | 'renderListItem'
    | 'renderErrorMessage'
    | 'paginationConfig'
  >

export function SelectItemFormField<ItemType, Error>({
  disabled = false,
  id,
  name,
  className,
  mode,
  variant,
  initialItem,
  renderInputValue,
  label,
  placeholder,
  useGetData,
  dialogTitle,
  dialogLabel,
  dialogProps,
  noSearchResults,
  renderListItem,
  renderErrorMessage,
  paginationConfig,
  extractIdFromItem,
}: SelectItemFormFieldProps<ItemType, Error>): ReactElement {
  const { field, fieldState } = useController({ name })

  const [showDialog, setShowDialog] = useState<boolean>(false)
  const selectedItem = useRef<ItemType | undefined>(initialItem)

  return (
    <>
      <SelectItemInput
        id={id}
        name={name}
        label={label}
        placeholder={placeholder}
        value={field.value}
        selectedItem={selectedItem.current}
        hasError={!!fieldState.error}
        disabled={disabled}
        mode={mode}
        variant={variant}
        className={className}
        renderInputValue={renderInputValue ? renderInputValue : renderListItem}
        onOpenSelect={() => setShowDialog(true)}
        onClear={() => {
          field.onChange('')
          selectedItem.current = undefined
        }}
      />
      {showDialog && (
        <SelectItemDialogWithSearch
          onDismiss={() => {
            field.onChange(field.value)
            setShowDialog(false)
          }}
          isOpen={showDialog}
          onConfirm={(item: ItemType) => {
            field.onChange(extractIdFromItem(item))
            selectedItem.current = item
            setShowDialog(false)
          }}
          useGetData={useGetData}
          renderListItem={renderListItem}
          renderErrorMessage={renderErrorMessage}
          title={dialogTitle}
          aria-label={dialogLabel}
          noSearchResults={noSearchResults}
          paginationConfig={paginationConfig}
          {...dialogProps}
        />
      )}
    </>
  )
}
