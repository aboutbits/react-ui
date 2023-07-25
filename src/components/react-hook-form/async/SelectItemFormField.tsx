import { ReactNode, useRef, useState } from 'react'
import { useController } from 'react-hook-form'
import { DialogProps } from '../../dialog'
import { FormVariantProps } from '../../form'
import {
  ClassNameProps,
  HideRequiredProps,
  ModeProps,
  RequiredProps,
} from '../../types'
import {
  SelectItemFormFieldDialog,
  SelectItemFormFieldDialogProps,
} from './SelectItemFormFieldDialog'
import { SelectItemInput, SelectItemInputProps } from './SelectItemInput'

export type SelectItemFormFieldProps<
  Item,
  SelectedItem extends Item | null,
  ItemId,
  Error,
> = Pick<
  SelectItemInputProps<Item, SelectedItem>,
  'name' | 'label' | 'placeholder' | 'disabled'
> & {
  renderInputItem?: (item: Item) => ReactNode
  extractIdFromItem: (item: Item) => ItemId
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
  RequiredProps &
  HideRequiredProps &
  Pick<
    SelectItemFormFieldDialogProps<Item, Error>,
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
  Error,
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
  extractIdFromItem,
  required,
  hideRequired,
}: SelectItemFormFieldProps<Item, SelectedItem, ItemId, Error>) {
  const { field, fieldState } = useController({ name })

  const [showDialog, setShowDialog] = useState<boolean>(false)
  const selectedItem = useRef<Item | null>(
    initialItem === undefined ? null : initialItem,
  )

  return (
    <>
      <SelectItemInput
        name={name}
        label={label}
        placeholder={placeholder}
        selectedItem={selectedItem.current}
        renderItem={renderInputItem ? renderInputItem : renderListItem}
        onOpenSelect={() => {
          setShowDialog(true)
        }}
        onClear={() => {
          field.onChange(null)
          selectedItem.current = null
        }}
        disabled={disabled}
        hasError={Boolean(fieldState.error)}
        required={required}
        hideRequired={hideRequired}
        mode={mode}
        variant={variant}
        className={className}
      />
      {showDialog && (
        <SelectItemFormFieldDialog
          onDismiss={() => {
            field.onChange(field.value)
            setShowDialog(false)
          }}
          isOpen={showDialog}
          onConfirm={(item: Item) => {
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
