import { ComponentType, ReactNode } from 'react'
import { ClassNameProps, IconProps, Tone } from '../types'

export enum AlertActionsPosition {
  Responsive = 'RESPONSIVE',
  FixedRight = 'FIXED_RIGHT',
  FixedBottom = 'FIXED_BOTTOM',
}

export type AlertProps = {
  tone: Tone
  icon?: ComponentType<IconProps>
  title?: ReactNode
  actions?: ReactNode
  children?: ReactNode
  actionsPosition?: AlertActionsPosition
} & ClassNameProps
