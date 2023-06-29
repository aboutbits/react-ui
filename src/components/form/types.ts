export enum FormVariant {
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

export type FormVariantProps = {
  variant?: FormVariant
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
