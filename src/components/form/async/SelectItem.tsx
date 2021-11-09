import React, {
  ReactElement,
  ReactNode,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useField } from 'formik'
import classnames from 'classnames'
import IconKeyboardArrowDown from '@aboutbits/react-material-icons/dist/IconKeyboardArrowDown'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { useCustomInputCss } from '../useCustomInputCss'
import { useInternationalization } from '../../../framework'
import { InputLabel } from '../InputLabel'
import { InputError } from '../InputError'
import {
  SelectItemDialogWithSearch,
  Props as DialogProps,
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
  label: string
  placeholder: string
  disabled?: boolean
  /**
   * This function will be used to extract the id value from the selected item.
   * @param item
   */
  extractIdFromItem: (item: ItemType) => string
} & Pick<
  DialogProps<ItemType, Error>,
  | 'useGetData'
  | 'dialogTitle'
  | 'dialogLabel'
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
          ? !!item.match(/(text-(left|center|right|justify)|text-opacity-.*)/g)
          : true
      )
      //transforms tailwindcss placeholder to text
      .map((item) =>
        item.includes('placeholder')
          ? item.replace('placeholder', 'text')
          : item
      )
      .join(' ')
  )
}

export function SelectItem<ItemType, Error>({
  disabled = false,
  id,
  name,
  initialItem,
  renderInputValue,
  label,
  placeholder,
  useGetData,
  dialogTitle,
  dialogLabel,
  noSearchResults,
  renderListItem,
  renderErrorMessage,
  paginationConfig,
  extractIdFromItem,
}: SelectItemProps<ItemType, Error>): ReactElement {
  const [field, , helpers] = useField<string>(name)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const selectedItem = useRef<ItemType | undefined>(initialItem)
  const customCss = useCustomInputCss(name, disabled)
  const internationalization = useInternationalization()
  const customCssInputCss = useMemo(
    () => replacePlaceholderColorWithTextColor(customCss.inputCss),
    [customCss.inputCss]
  )

  return (
    <>
      <div>
        <InputLabel inputId={id} label={label} className={customCss.labelCss} />
        {field.value === '' ? (
          <button
            type="button"
            id={id}
            onClick={() => {
              setShowDialog(true)
            }}
            className={classnames(customCssInputCss, 'flex flex-row text-left')}
          >
            <span className="flex-1">{placeholder}</span>
            <IconKeyboardArrowDown className="w-6 h-6" />
          </button>
        ) : (
          <div
            className={classnames(
              customCss.inputCss,
              'flex flex-row text-left'
            )}
          >
            <button
              type="button"
              id={id}
              onClick={() => setShowDialog(true)}
              className="flex-1 text-left"
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
                helpers.setTouched(true)
                helpers.setValue('')
                selectedItem.current = undefined
              }}
              className="pl-2"
            >
              <IconClose
                className="w-6 h-6"
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
            helpers.setTouched(true)
            setShowDialog(false)
          }}
          isOpen={showDialog}
          onConfirm={(item: ItemType) => {
            helpers.setTouched(true)
            helpers.setValue(extractIdFromItem(item))
            selectedItem.current = item
            setShowDialog(false)
          }}
          useGetData={useGetData}
          renderListItem={renderListItem}
          renderErrorMessage={renderErrorMessage}
          dialogTitle={dialogTitle}
          dialogLabel={dialogLabel}
          noSearchResults={noSearchResults}
          paginationConfig={paginationConfig}
        />
      )}
    </>
  )
}
