import { Tone } from '../types'
import { AlertActionsPosition } from './types'

export default {
  container: {
    base: 'flex items-start p-4 rounded-lg',
    tone: {
      [Tone.Primary]: 'bg-primary-50 text-primary-600',
      [Tone.Neutral]: 'bg-neutral-50 text-neutral-600',
      [Tone.Warning]: 'bg-warning-50 text-warning-600',
      [Tone.Critical]: 'bg-critical-50 text-critical-600',
      [Tone.Success]: 'bg-success-50 text-success-600',
      [Tone.Informative]: 'bg-informative-50 text-informative-600',
    },
  },
  icon: {
    base: 'w-5 h-5 shrink-0 mr-2 fill-current',
  },
  content: {
    base: 'grow flex justify-between items-start gap-y-4 gap-x-6',
    actionsPosition: {
      [AlertActionsPosition.Responsive]: 'flex-wrap',
      [AlertActionsPosition.FixedRight]: '',
      [AlertActionsPosition.FixedBottom]: 'flex-col',
    },
  },
  texts: {
    base: 'overflow-hidden text-sm break-words space-y-2',
  },
  title: {
    base: 'font-medium',
  },
  message: {
    base: '',
  },
  actions: {
    base: 'ml-auto flex -my-1.5 -mr-1.5 -ml-4',
  },
}
