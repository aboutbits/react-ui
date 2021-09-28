import React, { useState } from 'react'
import { useField } from 'formik'
import classnames from 'classnames'
import IconKeyboardArrowDown from '@aboutbits/react-material-icons/dist/IconKeyboardArrowDown'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'

import { useInternationalization } from '../../../framework'
import { useCustomInputCss } from '../useCustomInputCss'
import { InputLabel } from '../InputLabel'
import { InputError } from '../InputError'
import {
  SelectItemDialogWithSearch,
  Props as DialogProps,
} from './SelectItemDialogWithSearch'

type Props<ItemType extends ReferenceObject, Error> = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  id: string
  name: string
  label: string
  placeholder: string
  disabled?: boolean
  defaultValue: ItemType
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

export type ReferenceObject = {
  id: string | number
  name: string
  label?: string
}

type ItemType = ReferenceObject

/**
 * Converts tailwindcss classes from placeholder to text.
 *
 * Some tailwind classes (e.g. text-left) are excluded from the transformation as they are not linked to the text color.
 * */
export const helper = (css: string): string => {
  let result = css
  if (
    (css.includes('placeholder') && css.includes('text')) ||
    css.includes('placeholder')
  ) {
    result = css
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
  }
  return result
}

export const SelectItem = React.forwardRef<
  HTMLButtonElement,
  Props<ItemType, Error>
>(
  (
    {
      disabled = false,
      id,
      name,
      label,
      placeholder,
      defaultValue,
      useGetData,
      dialogTitle,
      dialogLabel,
      noSearchResults,
      renderListItem,
      renderErrorMessage,
      paginationConfig,
    },
    ref
  ) => {
    const [field, , helpers] = useField<ItemType>(name)
    const [, , helpersId] = useField<ItemType>(name + '.id')
    const [showDialog, setShowDialog] = useState<boolean>(false)
    const customCss = useCustomInputCss(`${field.name}.id`, disabled)
    const internationalization = useInternationalization()

    return (
      <>
        <div>
          <InputLabel
            inputId={id}
            label={label}
            className={customCss.labelCss}
          />
          {field.value.id === '' || field.value.id === 0 ? (
            <button
              type="button"
              id={id}
              onClick={() => {
                setShowDialog(true)
              }}
              className={helper(
                classnames(
                  customCss.inputCss,
                  'flex flex-row text-left text-gray-700'
                )
              )}
              {...ref}
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
                {...ref}
              >
                <span>{field.value.name}</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  helpers.setTouched(true)
                  helpersId.setTouched(true)
                  helpers.setValue(defaultValue)
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
          <InputError name={field.name + '.id'} className="mt-1" />
        </div>
        {showDialog && (
          <SelectItemDialogWithSearch
            onDismiss={() => {
              helpersId.setTouched(true)
              setShowDialog(false)
            }}
            isOpen={showDialog}
            onConfirm={(item: ItemType) => {
              helpersId.setTouched(true)
              helpers.setValue(item)
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
)

SelectItem.displayName = 'SelectItem'
