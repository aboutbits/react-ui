import { Tone } from '../types'

const className = {
  container: 'relative',
  list: {
    base: 'py-2 flex flex-col items-stretch gap-1 whitespace-nowrap min-w-[6rem] rounded border border-primary-500/10 shadow focus:outline-none bg-white absolute',
  },
  item: {
    base: 'inline-flex items-start font-medium text-sm leading-5 px-4 py-1.5',
    tone: {
      [Tone.Neutral]:
        'hover:bg-neutral-500/10 text-neutral-700 focus:outline-neutral-700',
      [Tone.Critical]:
        'hover:bg-critical-500/10 text-critical-500 focus:outline-critical-500',
      disabled: 'text-neutral-800/[0.36]',
    },
  },
}

export default className
