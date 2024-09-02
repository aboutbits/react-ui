import IconClose from '@aboutbits/react-material-icons/dist/IconClose'
import IconKeyboardArrowDown from '@aboutbits/react-material-icons/dist/IconKeyboardArrowDown'
import classNames from 'classnames'
import { ReactNode, useMemo, useRef } from 'react'
import { useInternationalization, useTheme } from '../../../framework'
import { FormTone, FormVariant, InputLabel, InputMessage } from '../../form'
import { useInputCss } from '../../form/primitive/useThemedCss'
import { HideRequiredProps, Mode, RequiredProps } from '../../types'
import { useId } from '../../util'
import { useFieldError } from '../util/useFieldError'
import { replacePlaceholderColorWithTextColor } from './replacePlaceholderColorWithTextColor'

export type SelectItemFormFieldInputProps<
  Item,
  SelectedItem extends Item | null,
> = {
  name: string
  label: string
  placeholder: string
  selectedItem: SelectedItem
  renderItem: (item: Item) => ReactNode
  onOpenSelect: () => void
  onClear: () => void
  disabled?: boolean
  hasError?: boolean
  mode?: Mode
  variant?: FormVariant
  className?: string
} & RequiredProps &
  HideRequiredProps

export function SelectItemFormFieldInput<
  Item,
  SelectedItem extends Item | null,
>({
  name,
  label,
  placeholder,
  selectedItem,
  renderItem,
  onOpenSelect,
  onClear,
  disabled = false,
  hasError,
  mode = Mode.Light,
  variant = FormVariant.Ghost,
  className,
  required,
  hideRequired,
}: SelectItemFormFieldInputProps<Item, SelectedItem>) {
  const id = useId()
  const componentRef = useRef<HTMLDivElement | null>(null)

  const error = useFieldError(name)

  const inputCss = useInputCss({
    mode,
    variant,
    tone: error ? FormTone.Critical : FormTone.Neutral,
    disabled,
    withIconStart: false,
    withIconEnd: false,
  })

  const customCssEmptyInput = useMemo(
    () => replacePlaceholderColorWithTextColor(inputCss),
    [inputCss],
  )
  const { messages } = useInternationalization()
  const { form } = useTheme()

  return (
    <div ref={componentRef} className={className}>
      <InputLabel
        htmlFor={id}
        showRequired={required && !hideRequired}
        disabled={disabled}
      >
        {label}
      </InputLabel>
      {selectedItem === null ? (
        <button
          disabled={disabled}
          type="button"
          id={id}
          onClick={() => {
            onOpenSelect()
          }}
          className={classNames(
            customCssEmptyInput,
            form.selectItem.input.container.base,
            hasError
              ? form.selectItem.input.container.error
              : form.selectItem.input.container.normal,
          )}
        >
          <span className={form.selectItem.input.placeholder.base}>
            {placeholder}
          </span>
          <span className={form.selectItem.input.iconContainer.base}>
            <IconKeyboardArrowDown
              className={classNames(
                form.selectItem.input.icon.base,
                disabled && form.selectItem.input.icon.disabled,
              )}
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
              : form.selectItem.input.container.normal,
          )}
        >
          <button
            disabled={disabled}
            type="button"
            id={id}
            onClick={() => {
              onOpenSelect()
            }}
            className={form.selectItem.input.selectButton.base}
          >
            <span>{renderItem(selectedItem)}</span>
          </button>
          <button
            disabled={disabled}
            type="button"
            onClick={() => {
              onClear()
            }}
            className={classNames(
              form.selectItem.input.iconContainer.base,
              hasError
                ? form.selectItem.input.iconContainer.error
                : form.selectItem.input.iconContainer.normal,
            )}
          >
            <IconClose
              className={classNames(
                form.selectItem.input.icon.base,
                disabled && form.selectItem.input.icon.disabled,
              )}
              title={messages['select.clear']}
            />
          </button>
        </div>
      )}
      {Boolean(error) && (
        <InputMessage
          mode={mode}
          tone={FormTone.Critical}
          disabled={disabled}
          message={error?.message}
        />
      )}
    </div>
  )
}
