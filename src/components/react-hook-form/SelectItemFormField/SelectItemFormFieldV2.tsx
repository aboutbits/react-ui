import { ReactNode, useState } from 'react'
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
  SelectItemFormFieldInputV2,
  SelectItemFormFieldInputV2Props,
} from './SelectItemFormFieldInputV2'

export type SelectItemFormFieldV2Props<Item, Error> = Pick<
  SelectItemFormFieldInputV2Props<Item>,
  'name' | 'label' | 'placeholder' | 'disabled'
> & {
  renderInputItem?: (item: Item) => ReactNode
  /**
   * The item that should be rendered on first render.
   */
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
export function SelectItemFormFieldV2<Item, Error>({
  disabled = false,
  name,
  className,
  mode,
  variant,
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
  required,
  hideRequired,
}: SelectItemFormFieldV2Props<Item, Error>) {
  const { field, fieldState } = useController({ name })
  const [showDialog, setShowDialog] = useState<boolean>(false)

  const selectedItem = field.value as Item | null | undefined

  return (
    <>
      <SelectItemFormFieldInputV2
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
            field.onChange(selectedItem)
            setShowDialog(false)
          }}
          isOpen={showDialog}
          onConfirm={(item) => {
            field.onChange(item)
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
