import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import IconKeyboardArrowDown from '@aboutbits/react-material-icons/dist/IconKeyboardArrowDown'
import classNames from 'classnames'
import { ReactElement, ReactNode, useMemo, useRef, useState } from 'react'
import { useController } from 'react-hook-form'
import { useInternationalization, useTheme } from '../../../framework'
import { DialogProps } from '../../dialog'
import { ClassNameProps, Mode } from '../../types'
import { InputError } from '../InputError'
import { InputLabel } from '../InputLabel'
import { Variant } from '../types'
import { useCustomInputCss } from '../useCustomInputCss'
import {
  SelectItemDialogWithSearch,
  SelectItemDialogWithSearchProps,
} from './SelectItemDialogWithSearch'

export type SelectItemProps<ItemType, Error> = {
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
} & ClassNameProps &
  Pick<
    SelectItemDialogWithSearchProps<ItemType, Error>,
    | 'useGetData'
    | 'noSearchResults'
    | 'renderListItem'
    | 'renderErrorMessage'
    | 'paginationConfig'
  >

/**
 * Converts tailwindcss classes from placeholder to text.
 *
 * Some tailwind classes (e.g. text-left) are excluded from the transformation as they are not linked to the text color.
 **/
export const replacePlaceholderColorWithTextColor = (css: string): string => {
  if (!css.includes('placeholder')) {
    return css
  }
  return (
    css
      .split(' ')
      //removes tailwindcss text-<color>
      .filter((item) =>
        item.includes('text')
          ? !!item.match(
              /:|(text-(left|center|right|justify)|text-opacity-.*)/g
            )
          : true
      )
      //transforms tailwindcss placeholder:text-* to text-*
      .map((item) =>
        item.includes('placeholder:text-')
          ? item.replace('placeholder:text-', 'text-')
          : item
      )
      .join(' ')
  )
}

export function SelectItem<ItemType, Error>({
  disabled = false,
  id,
  name,
  className,
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
}: SelectItemProps<ItemType, Error>): ReactElement {
  const { field, fieldState } = useController({ name })

  const componentRef = useRef<HTMLDivElement | null>(null)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const selectedItem = useRef<ItemType | undefined>(initialItem)
  const customCss = useCustomInputCss(name, {
    disabled,
    mode: Mode.light,
    variant: Variant.ghost,
  })
  const customCssEmptyInput = useMemo(
    () => replacePlaceholderColorWithTextColor(customCss.inputCss),
    [customCss.inputCss]
  )
  const internationalization = useInternationalization()
  const { form } = useTheme()

  const fieldHasError = !!fieldState.error

  return (
    <>
      <div ref={componentRef} className={className}>
        <InputLabel inputId={id} label={label} className={customCss.labelCss} />
        {field.value === '' ? (
          <button
            type="button"
            id={id}
            onClick={() => {
              setShowDialog(true)
            }}
            className={classNames(
              customCssEmptyInput,
              form.selectItem.input.container.base,
              fieldHasError
                ? form.selectItem.input.container.error
                : form.selectItem.input.container.normal
            )}
          >
            <span className={form.selectItem.input.placeholder.base}>
              {placeholder}
            </span>
            <span className={form.selectItem.input.iconContainer.base}>
              <IconKeyboardArrowDown
                className={form.selectItem.input.icon.base}
              />
            </span>
          </button>
        ) : (
          <div
            className={classNames(
              customCss.inputCss,
              form.selectItem.input.container.base,
              fieldHasError
                ? form.selectItem.input.container.error
                : form.selectItem.input.container.normal
            )}
          >
            <button
              type="button"
              id={id}
              onClick={() => setShowDialog(true)}
              className={form.selectItem.input.selectButton.base}
            >
              <span>
                {renderInputValue && selectedItem.current
                  ? renderInputValue(selectedItem.current)
                  : selectedItem.current && !renderInputValue
                  ? renderListItem(selectedItem.current)
                  : field.value}
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                field.onChange('')
                selectedItem.current = undefined
              }}
              className={classNames(
                form.selectItem.input.iconContainer.base,
                fieldHasError
                  ? form.selectItem.input.iconContainer.error
                  : form.selectItem.input.iconContainer.normal
              )}
            >
              <IconClose
                className={form.selectItem.input.icon.base}
                title={internationalization.translate('shared.select.clear')}
              />
            </button>
          </div>
        )}
        <InputError name={name} className={customCss.errorCss} />
      </div>
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
