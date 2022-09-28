import { ComponentType, ReactNode } from 'react'
import { ClassNameProps, IconProps, Tone } from '../types'

export enum AlertActionsPosition {
  responsive = 'responsive',
  fixedRight = 'fixedRight',
  fixedBottom = 'fixedBottom',
}

export type AlertProps = {
  tone: Tone
  icon?: ComponentType<IconProps>
  title?: ReactNode
  actions?: ReactNode
  children?: ReactNode
  actionsPosition?: AlertActionsPosition
} & ClassNameProps
