import { Tone } from '../types'

const className = {
  container: 'relative',
  list: {
    base: 'py-2 flex flex-col items-stretch gap-1 whitespace-nowrap min-w-[6rem] rounded-sm border border-primary-500/10 shadow-sm bg-white absolute',
  },
  item: {
    base: 'inline-flex items-start font-medium text-sm leading-5 px-4 py-1.5',
    active: {
      tone: {
        [Tone.Neutral]: 'bg-neutral-500/10',
        [Tone.Critical]: 'bg-critical-500/10',
      },
    },
    tone: {
      [Tone.Neutral]: 'text-neutral-700',
      [Tone.Critical]: 'text-critical-500',
      disabled: 'text-neutral-800/[0.36]',
    },
  },
}

export default className
