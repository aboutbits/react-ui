export enum FormVariant {
  Ghost = 'GHOST',
  Soft = 'SOFT',
  Solid = 'SOLID',
  Transparent = 'TRANSPARENT',
}

export enum FormTone {
  Neutral = 'NEUTRAL',
  Critical = 'CRITICAL',
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
  Invalid = 'INVALID',
}

export type StatusProps = {
  /**
   * The status of the field component.
   */
  status?: Status
}
