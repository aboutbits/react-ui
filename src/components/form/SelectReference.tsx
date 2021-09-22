import { ReactElement } from 'react'
import { useField } from 'formik'
import classnames from 'classnames'
import IconKeyboardArrowDown from '@aboutbits/react-material-icons/dist/IconKeyboardArrowDown'
import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import { useInternationalization } from '../../framework'
import { InputLabel } from './InputLabel'
import { useCustomInputCss } from './useCustomInputCss'
import { InputError } from './InputError'

type ReferenceObject = {
  id: number | string
  name: string
  label?: string
}

type Props<T extends ReferenceObject> = {
  disabled: boolean
  name: string
  id: string
  label: string
  placeholder: string
  setShowDialog: (toggle: boolean) => void
  defaultValue: T
}

export function SelectReference<T extends ReferenceObject>({
  disabled = false,
  name,
  id,
  label,
  placeholder,
  setShowDialog,
  defaultValue,
}: Props<T>): ReactElement {
  const [field, , helpers] = useField<T>(name)
  const [, , helpersId] = useField<T>(name + '.id')
  const customCss = useCustomInputCss(`${field.name}.id`, disabled)
  const internationalization = useInternationalization()
  return (
    <div>
      <InputLabel inputId={id} label={label} className={customCss.labelCss} />
      {field.value.id === 0 || field.value.id === '' ? (
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
          className={classnames(customCss.inputCss, 'flex flex-row text-left')}
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
  )
}
