import React, { ReactElement, useState } from 'react'
import { useField } from 'formik'
import classnames from 'classnames'
import IconKeyboardArrowDown from '@aboutbits/react-material-icons/dist/IconKeyboardArrowDown'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'

import { useInternationalization } from '../../framework'
import {
  SelectItemSearchableDialog,
  Props as DialogProps,
} from './SelectItemSearchableDialog'
import { useCustomInputCss } from './useCustomInputCss'
import { InputLabel } from './InputLabel'
import { InputError } from './InputError'

type Props<ItemType extends ReferenceObject, Error> = {
  disabled?: boolean
  id: string
  name: string
  label: string
  placeholder: string
  defaultValue: ItemType
} & Pick<
  DialogProps<ItemType, Error>,
  | 'useGetData'
  | 'dialogTitle'
  | 'dialogLabel'
  | 'noSearchResults'
  | 'renderListItem'
  | 'renderErrorMessage'
>

export type ReferenceObject = {
  id: string | number
  name: string
  label?: string
}

export function SelectItem<ItemType extends ReferenceObject, Error>({
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
}: Props<ItemType, Error>): ReactElement {
  const [field, , helpers] = useField<ItemType>(name)
  const [, , helpersId] = useField<ItemType>(name + '.id')
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const customCss = useCustomInputCss(`${field.name}.id`, disabled)
  const internationalization = useInternationalization()
  return (
    <>
      <div>
        <InputLabel inputId={id} label={label} className={customCss.labelCss} />
        {field.value.id === '' || field.value.id === 0 ? (
          <button
            type="button"
            id={id}
            onClick={() => {
              setShowDialog(true)
            }}
            className={classnames(
              customCss.inputCss,
              'flex flex-row text-left text-gray-700'
            )}
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
        <SelectItemSearchableDialog
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
        />
      )}
    </>
  )
}
