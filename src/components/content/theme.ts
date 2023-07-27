import { Tone } from '../types'
import { ContentMessageIconStyle } from './ContentMessage/types'
import { DescriptionItemContentAlignVertical } from './DescriptionItem/types'

export default {
  area: {
    base: 'space-y-9',
  },
  message: {
    base: 'flex max-w-sm flex-col items-center justify-center',
    contentContainer: 'flex justify-center items-center',
    icon: {
      base: 'fill-current',
      tone: {
        [Tone.Primary]: 'text-primary-500',
        [Tone.Neutral]: 'text-neutral-500',
        [Tone.Warning]: 'text-warning-500',
        [Tone.Critical]: 'text-critical-500',
        [Tone.Success]: 'text-success-500',
        [Tone.Informative]: 'text-informative-500',
      },
      style: {
        [ContentMessageIconStyle.Rounded]: 'h-6 w-6',
        [ContentMessageIconStyle.Plain]: 'h-14 w-14',
      },
    },
    iconContainer: {
      base: 'mb-4 last:mb-0',
      style: {
        [ContentMessageIconStyle.Rounded]: {
          base: 'rounded-full p-4',
          tone: {
            [Tone.Primary]: 'bg-primary-100',
            [Tone.Neutral]: 'bg-neutral-100',
            [Tone.Warning]: 'bg-warning-100',
            [Tone.Critical]: 'bg-critical-100',
            [Tone.Success]: 'bg-success-100',
            [Tone.Informative]: 'bg-informative-100',
          },
        },
        [ContentMessageIconStyle.Plain]: {
          base: '',
          tone: {
            [Tone.Primary]: '',
            [Tone.Neutral]: '',
            [Tone.Warning]: '',
            [Tone.Critical]: '',
            [Tone.Success]: '',
            [Tone.Informative]: '',
          },
        },
      },
    },
    title: {
      base: 'text-center text-xl font-bold leading-6 mb-1 last:mb-0',
      tone: {
        [Tone.Primary]: 'text-primary-500',
        [Tone.Neutral]: 'text-neutral-500',
        [Tone.Warning]: 'text-warning-500',
        [Tone.Critical]: 'text-critical-500',
        [Tone.Success]: 'text-success-500',
        [Tone.Informative]: 'text-informative-500',
      },
    },
    text: {
      base: 'text-center tracking-[0.00625rem]',
      tone: {
        [Tone.Primary]: 'text-neutral-500',
        [Tone.Neutral]: 'text-neutral-500',
        [Tone.Warning]: 'text-neutral-500',
        [Tone.Critical]: 'text-neutral-500',
        [Tone.Success]: 'text-neutral-500',
        [Tone.Informative]: 'text-neutral-500',
      },
    },
  },
  descriptionItem: {
    base: 'flex flex-col border-b border-neutral-200',
  },
  descriptionItemTitle: {
    base: 'text-xs',
  },
  descriptionItemContent: {
    base: 'flex-1 flex',
    alignVertical: {
      [DescriptionItemContentAlignVertical.Start]: 'items-start',
      [DescriptionItemContentAlignVertical.Center]: 'items-center',
      [DescriptionItemContentAlignVertical.End]: 'items-end',
    },
  },
  loadingDescriptionItem: {
    base: '',
    upper: {
      base: 'p-1.5 w-40',
    },
    lower: {
      base: 'p-2.5 pb-2.5-1px w-full mt-1 mb-1',
    },
  },
}
