import { ReactNode, useEffect, useRef, useState } from 'react'
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
import {
  SelectItemFormFieldInput,
  SelectItemFormFieldInputProps,
} from './SelectItemFormFieldInput'

export type SelectItemFormFieldProps<
  Item,
  SelectedItem extends Item | null,
  ItemId,
  Error,
> = Pick<
  SelectItemFormFieldInputProps<Item, SelectedItem>,
  'name' | 'label' | 'placeholder' | 'disabled'
> & {
  /**
   * The function to resolve an item by its id. This will be called when the programmatically set value is not the same as the initial item.
   * When the function cannot resolve the item, it has to throw an error.
   * Make sure to pass a stable reference to prevent unnecessary calls.
   */
  resolveItem?: (id: ItemId) => Item | Promise<Item>
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
 * A [SelectItemField](../?path=/docs/components-form-selectitemfield--docs) within the context of a `react-hook-form` form.
 *
 * It is composed of the primitives [InputLabel](../?path=/docs/components-form-primitive-inputlabel--docs) and [InputMessage](../?path=/docs/components-form-primitive-inputmessage--docs).
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
  resolveItem,
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
  const initialItemRef = useRef(initialItem)

  const { field, fieldState } = useController({ name })

  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [selectedItem, setSelectedItem] = useState<Item | null>(
    initialItem ?? null,
  )

  const fieldValueRef = useRef(field.value as ItemId)
  useEffect(() => {
    fieldValueRef.current = field.value as ItemId
  }, [field.value])

  // This effect is used to set the selected item when the field value changes (i.e. when the value is set programmatically with React Hook Form).
  useEffect(() => {
    if (selectedItem && extractIdFromItem(selectedItem) === field.value) {
      return
    }

    // If the field value is null or undefined, we set the selected item to null.
    if (field.value === null || field.value === undefined) {
      setSelectedItem(null)
      return
    }

    // If the field value is the same as the initial item's id, we set the selected item to the initial item.
    if (
      initialItemRef.current &&
      field.value === extractIdFromItem(initialItemRef.current)
    ) {
      setSelectedItem(initialItemRef.current)
      return
    }

    // At this point, we don't know the selected item. We have to resolve it with the resolveItem callback.

    if (!resolveItem) {
      console.warn(
        'SelectItemFormField: No resolveItem function provided. This is required to resolve the selected item.',
      )
      return
    }

    const fieldValueToBeResolved = field.value as ItemId

    void (async () => {
      try {
        const item = await resolveItem(fieldValueToBeResolved)

        // Make sure the field has not been changed in the meantime
        if (fieldValueToBeResolved === fieldValueRef.current) {
          // Make sure the resolved item is really the item that we want to set
          if (extractIdFromItem(item) === fieldValueToBeResolved) {
            setSelectedItem(item)
          } else {
            console.error(
              'SelectItemFormField: The resolved item could not be set as the selected item. It does not have the same id as the field value.',
            )
          }
        }
      } catch (error) {
        console.error(
          'SelectItemFormField: Error while resolving the selected item.',
          error,
        )
      }
    })()
  }, [field.value, selectedItem, extractIdFromItem, resolveItem])

  return (
    <>
      <SelectItemFormFieldInput
        name={name}
        label={label}
        placeholder={placeholder}
        selectedItem={selectedItem}
        renderItem={renderInputItem ? renderInputItem : renderListItem}
        onOpenSelect={() => {
          setShowDialog(true)
        }}
        onClear={() => {
          field.onChange(null)
          setSelectedItem(null)
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
            setSelectedItem(item)
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
