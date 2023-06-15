import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import IconKeyboardArrowDown from '@aboutbits/react-material-icons/dist/IconKeyboardArrowDown'
import classNames from 'classnames'
import { ReactNode, useMemo, useRef } from 'react'
import { useInternationalization, useTheme } from '../../../framework'
import { FormTone, InputMessage } from '../../formNew'
import { InputLabel } from '../../formNew/primitive/InputLabel'
import { useInputCss } from '../../formNew/primitive/useThemedCss'
import { FormVariant } from '../../formNew/types'
import { Mode } from '../../types'
import { useFieldError } from '../util/useFieldError'
import { replacePlaceholderColorWithTextColor } from './replacePlaceholderColorWithTextColor'

export type SelectItemInputProps<ItemType> = {
  id: string
  name: string
  label: string
  placeholder: string
  disabled?: boolean
  selectedItem?: ItemType
  value?: string | number | undefined | null
  hasError?: boolean
  renderInputValue?: (item: ItemType) => ReactNode
  onOpenSelect: () => void
  onClear: () => void
  mode?: Mode
  variant?: FormVariant
  className?: string
}

export function SelectItemInput<ItemType>({
  id,
  name,
  label,
  placeholder,
  disabled = false,
  value,
  selectedItem,
  hasError,
  renderInputValue,
  onOpenSelect,
  onClear,
  mode = Mode.light,
  variant = FormVariant.ghost,
  className,
}: SelectItemInputProps<ItemType>) {
  const componentRef = useRef<HTMLDivElement | null>(null)

  const error = useFieldError(name)

  const inputCss = useInputCss({
    mode,
    variant,
    tone: error ? FormTone.critical : FormTone.neutral,
    disabled,
    withIconStart: false,
    withIconEnd: false,
  })

  const customCssEmptyInput = useMemo(
    () => replacePlaceholderColorWithTextColor(inputCss),
    [inputCss]
  )
  const { messages } = useInternationalization()
  const { form } = useTheme()

  return (
    <div ref={componentRef} className={className}>
      <InputLabel htmlFor={id} label={label} />
      {value === '' ? (
        <button
          type="button"
          id={id}
          onClick={() => onOpenSelect()}
          className={classNames(
            customCssEmptyInput,
            form.selectItem.input.container.base,
            hasError
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
            inputCss,
            form.selectItem.input.container.base,
            hasError
              ? form.selectItem.input.container.error
              : form.selectItem.input.container.normal
          )}
        >
          <button
            type="button"
            id={id}
            onClick={() => onOpenSelect()}
            className={form.selectItem.input.selectButton.base}
          >
            <span>
              {renderInputValue && selectedItem
                ? renderInputValue(selectedItem)
                : value}
            </span>
          </button>
          <button
            type="button"
            onClick={() => onClear()}
            className={classNames(
              form.selectItem.input.iconContainer.base,
              hasError
                ? form.selectItem.input.iconContainer.error
                : form.selectItem.input.iconContainer.normal
            )}
          >
            <IconClose
              className={form.selectItem.input.icon.base}
              title={messages['select.clear']}
            />
          </button>
        </div>
      )}
      {!!error && (
        <InputMessage
          mode={mode}
          tone={FormTone.critical}
          disabled={disabled}
          message={error.message?.toString()}
        />
      )}
    </div>
  )
}
