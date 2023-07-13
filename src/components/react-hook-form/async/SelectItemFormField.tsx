import { ReactNode, useRef, useState } from 'react'
import { useController } from 'react-hook-form'
import { DialogProps } from '../../dialog'
import { FormVariantProps } from '../../form'
import { ClassNameProps, ModeProps } from '../../types'
import {
  SelectItemDialogWithSearch,
  SelectItemDialogWithSearchProps,
} from './SelectItemDialogWithSearch'
import { SelectItemInput, SelectItemInputProps } from './SelectItemInput'

export type SelectItemFormFieldProps<
  Item,
  SelectedItem extends Item | null,
  ItemId,
  Error
> = Pick<
  SelectItemInputProps<Item, SelectedItem>,
  'name' | 'label' | 'placeholder' | 'disabled'
> & {
  renderInputItem?: (item: Item) => ReactNode
  getItemId: (item: Item) => ItemId
  /**
   * The item that should be rendered on first render.
   */
  initialItem?: Item
  dialogTitle: ReactNode
  dialogLabel: string
  /**
   * Props of the dialog for a detailed configuration.
   */
  dialogProps?: DialogProps
} & ModeProps &
  FormVariantProps &
  ClassNameProps &
  Pick<
    SelectItemDialogWithSearchProps<Item, Error>,
    | 'useGetData'
    | 'noSearchResults'
    | 'renderListItem'
    | 'renderErrorMessage'
    | 'paginationConfig'
  >

/*
 * A [SelectItemField](../?path=/docs/components-form-selectitemfield--default-story) within the context of a `react-hook-form` form.
 *
 * It is composed of the primitives [InputLabel](../?path=/docs/components-form-primitive-inputlabel--default-story) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--default-story).
 */
export function SelectItemFormField<
  Item,
  SelectedItem extends Item | null,
  ItemId,
  Error
>({
  disabled = false,
  name,
  className,
  mode,
  variant,
  initialItem,
  renderInputItem,
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
  getItemId,
}: SelectItemFormFieldProps<Item, SelectedItem, ItemId, Error>) {
  const { field, fieldState } = useController({ name })

  const [showDialog, setShowDialog] = useState<boolean>(false)
  const selectedItem = useRef<Item | null>(
    initialItem === undefined ? null : initialItem
  )

  return (
    <>
      <SelectItemInput
        name={name}
        label={label}
        placeholder={placeholder}
        selectedItem={selectedItem.current}
        renderItem={renderInputItem ? renderInputItem : renderListItem}
        onOpenSelect={() => setShowDialog(true)}
        onClear={() => {
          field.onChange(null)
          selectedItem.current = null
        }}
        disabled={disabled}
        hasError={!!fieldState.error}
        mode={mode}
        variant={variant}
        className={className}
      />
      {showDialog && (
        <SelectItemDialogWithSearch
          onDismiss={() => {
            field.onChange(field.value)
            setShowDialog(false)
          }}
          isOpen={showDialog}
          onConfirm={(item: Item) => {
            field.onChange(getItemId(item))
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
