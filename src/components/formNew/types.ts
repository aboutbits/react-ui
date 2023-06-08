export enum InputVariant {
  ghost = 'ghost',
  soft = 'soft',
  solid = 'solid',
  transparent = 'transparent',
}

export enum FormTone {
  neutral = 'NEUTRAL',
  critical = 'CRITICAL',
}

export type FormToneProps = {
  /**
   * The tone of the component.
   */
  tone?: FormTone
}

export type VariantProps = {
  variant?: InputVariant
}

export enum Status {
  invalid = 'INVALID',
}

export type StatusProps = {
  /**
   * The status of the field component.
   */
  status?: Status
}
