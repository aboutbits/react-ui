import { forwardRef } from 'react'
import {
  InputMessage,
  InputMessageProps,
  ToggleSwitch,
  ToggleSwitchLayout,
  ToggleSwitchProps,
} from './primitive'
import { FormTone, Status, StatusProps } from './types'

export type ToggleSwitchFieldProps = Omit<ToggleSwitchProps, 'tone'> &
  Pick<InputMessageProps, 'message'> &
  StatusProps

/**
 * A toggle switch field.
 *
 * Is composed of the primitives [ToggleSwitch](../?path=/docs/components-formnew-primitive-toggleswitch--default-stroy) and [InputMessage](../?path=/docs/components-formnew-primitive-inputmessage--default-story).
 */
export const ToggleSwitchField = forwardRef<
  HTMLInputElement,
  ToggleSwitchFieldProps
>(function ToggleSwitchField(
  {
    mode,
    status,
    disabled = false,
    className,
    message,
    layout = ToggleSwitchLayout.start,
    ...props
  },
  ref
) {
  const tone = status === Status.invalid ? FormTone.critical : undefined

  return (
    <div className={className}>
      <ToggleSwitch
        {...props}
        mode={mode}
        disabled={disabled}
        layout={layout}
        ref={ref}
      />
      {message && (
        <InputMessage
          mode={mode}
          tone={tone}
          disabled={disabled}
          message={message}
          noIndent
        />
      )}
    </div>
  )
})
