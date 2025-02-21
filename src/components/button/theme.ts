import { Mode, Size, Tone } from '../types'
import { ButtonVariant } from './types'

export default {
  button: {
    base: 'inline-flex items-center justify-center font-medium rounded-lg focus:outline outline-offset-2',
    variantSize: {
      base: {
        [Size.Sm]: 'text-sm leading-5',
        [Size.Md]: 'text-sm leading-5',
        [Size.Lg]: 'text-lg leading-7',
      },
      [ButtonVariant.Solid]: {
        [Size.Sm]: 'px-4 py-1.5',
        [Size.Md]: 'px-6 py-2.5',
        [Size.Lg]: 'px-8 py-4',
      },
      [ButtonVariant.Ghost]: {
        [Size.Sm]: 'px-4-1px py-1.5-1px border',
        [Size.Md]: 'px-6-1px py-2.5-1px border',
        [Size.Lg]: 'px-8-1px py-4-1px border',
      },
      [ButtonVariant.Transparent]: {
        [Size.Sm]: 'px-4 py-1.5',
        [Size.Md]: 'px-6 py-2.5',
        [Size.Lg]: 'px-8 py-4',
      },
    },
    icon: {
      base: 'fill-current',
      size: {
        [Size.Sm]: 'w-4 h-4',
        [Size.Md]: 'w-4 h-4',
        [Size.Lg]: 'w-7 h-7',
      },
      iconStart: {
        size: {
          [Size.Sm]: '-ml-1 mr-1',
          [Size.Md]: '-ml-2 mr-2',
          [Size.Lg]: '-ml-3 mr-3',
        },
      },
      iconEnd: {
        size: {
          [Size.Sm]: 'ml-1 -mr-1',
          [Size.Md]: 'ml-2 -mr-2',
          [Size.Lg]: 'ml-3 -mr-3',
        },
      },
    },
  },
  buttonIcon: {
    base: 'inline-block rounded-full outline-offset-2 focus:outline',
    icon: {
      base: 'fill-current block',
      size: {
        [Size.Sm]: 'w-5 h-5',
        [Size.Md]: 'w-6 h-6',
        [Size.Lg]: 'w-9 h-9',
      },
    },
    variantSize: {
      [ButtonVariant.Solid]: {
        [Size.Sm]: 'p-1.5',
        [Size.Md]: 'p-2',
        [Size.Lg]: 'p-3',
      },
      [ButtonVariant.Ghost]: {
        [Size.Sm]: 'p-1.5-1px border',
        [Size.Md]: 'p-2-1px border',
        [Size.Lg]: 'p-3-1px border',
      },
      [ButtonVariant.Transparent]: {
        [Size.Sm]: 'p-1.5',
        [Size.Md]: 'p-2',
        [Size.Lg]: 'p-3',
      },
    },
  },
  modeVariantTone: {
    [Mode.Light]: {
      [ButtonVariant.Solid]: {
        [Tone.Primary]:
          'bg-primary-500 hover:bg-primary-600 text-white outline-primary-500',
        [Tone.Neutral]:
          'bg-neutral-700 hover:bg-neutral-900 text-white outline-neutral-800',
        [Tone.Critical]:
          'bg-critical-500 hover:bg-critical-600 text-white outline-critical-500',
        [Tone.Warning]:
          'bg-warning-500 hover:bg-warning-600 text-white outline-warning-500',
        [Tone.Success]:
          'bg-success-600 hover:bg-success-700 text-white outline-success-600',
        [Tone.Informative]:
          'bg-informative-500 hover:bg-informative-600 text-white outline-informative-500',
        disabled: 'bg-neutral-800/[0.16] text-neutral-800/[0.36]',
      },
      [ButtonVariant.Ghost]: {
        [Tone.Primary]:
          'hover:bg-primary-500/10 focus:bg-primary-500/10 border-primary-500 focus:border-transparent text-primary-500 outline-primary-500',
        [Tone.Neutral]:
          'hover:bg-neutral-500/10 focus:bg-neutral-500/10 border-neutral-700 focus:border-transparent text-neutral-700 outline-neutral-700',
        [Tone.Critical]:
          'hover:bg-critical-500/10 focus:bg-critical-500/10 border-critical-500 focus:border-transparent text-critical-500 outline-critical-500',
        [Tone.Warning]:
          'hover:bg-warning-500/10 focus:bg-warning-500/10 border-warning-600 focus:border-transparent text-warning-600 outline-warning-600',
        [Tone.Success]:
          'hover:bg-success-500/10 focus:bg-success-500/10 border-success-600 focus:border-transparent text-success-600 outline-success-600',
        [Tone.Informative]:
          'hover:bg-informative-500/10 focus:bg-informative-500/10 border-informative-500 focus:border-transparent text-informative-500 outline-informative-500',
        disabled: 'border-neutral-800/[0.36] text-neutral-800/[0.36]',
      },
      [ButtonVariant.Transparent]: {
        [Tone.Primary]:
          'hover:bg-primary-500/10 text-primary-500 focus:outline-primary-500',
        [Tone.Neutral]:
          'hover:bg-neutral-500/10 text-neutral-700 focus:outline-neutral-700',
        [Tone.Critical]:
          'hover:bg-critical-500/10 text-critical-500 focus:outline-critical-500',
        [Tone.Warning]:
          'hover:bg-warning-500/10 text-warning-600 focus:outline-warning-600',
        [Tone.Success]:
          'hover:bg-success-500/10 text-success-600 focus:outline-success-600',
        [Tone.Informative]:
          'hover:bg-informative-500/10 text-informative-500 focus:outline-informative-500',
        disabled: 'text-neutral-800/[0.36]',
      },
    },
    [Mode.Dark]: {
      [ButtonVariant.Solid]: {
        [Tone.Primary]:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        [Tone.Neutral]:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        [Tone.Critical]:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        [Tone.Warning]:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        [Tone.Success]:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        [Tone.Informative]:
          'bg-white hover:bg-white/[0.84] text-neutral-900 outline-white',
        disabled: 'bg-white/[0.26] text-white/[0.36]',
      },
      [ButtonVariant.Ghost]: {
        [Tone.Primary]:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        [Tone.Neutral]:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        [Tone.Critical]:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        [Tone.Warning]:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        [Tone.Success]:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        [Tone.Informative]:
          'hover:bg-white/10 focus:bg-white/10 border-white focus:border-transparent text-white outline-white',
        disabled: 'border-white/[0.36] text-white/[0.36]',
      },
      [ButtonVariant.Transparent]: {
        [Tone.Primary]: 'hover:bg-white/10 text-white focus:outline-white',
        [Tone.Neutral]: 'hover:bg-white/10 text-white focus:outline-white',
        [Tone.Critical]: 'hover:bg-white/10 text-white focus:outline-white',
        [Tone.Warning]: 'hover:bg-white/10 text-white focus:outline-white',
        [Tone.Success]: 'hover:bg-white/10 text-white focus:outline-white',
        [Tone.Informative]: 'hover:bg-white/10 text-white focus:outline-white',
        disabled: 'text-white/[0.36]',
      },
    },
  },
}
