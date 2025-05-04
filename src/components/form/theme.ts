import { Mode, Size, Tone } from '../types'
import { CheckboxLayout } from './primitive/Checkbox/types'
import { FieldSetIndent } from './primitive/FieldSet/types'
import { IconPosition } from './primitive/InputIcon/types'
import { RadioLayout } from './primitive/Radio/types'
import { ToggleSwitchLayout } from './primitive/ToggleSwitch/types'
import { FormVariant } from './types'

export default {
  input: {
    base: 'block w-full p-2.5-1px border leading-5 appearance-none outline-hidden focus:ring-0 focus:outline focus:-outline-offset-2 rounded-lg',
    field: 'relative',
    modeVariant: {
      [Mode.Light]: {
        base: {
          tone: {
            [Tone.Neutral]: 'placeholder:text-neutral-800/[0.36]',
            [Tone.Critical]: 'placeholder:text-neutral-800/[0.36]',
          },
          disabled:
            'text-neutral-800/[0.36] placeholder:text-neutral-800/[0.36]',
        },
        [FormVariant.Ghost]: {
          tone: {
            [Tone.Neutral]:
              'bg-transparent border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800',
            [Tone.Critical]:
              'bg-transparent border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          },
          disabled: 'bg-transparent border-neutral-800/[0.36]',
        },
        [FormVariant.Soft]: {
          tone: {
            [Tone.Neutral]:
              'bg-neutral-800/[0.06] border-transparent focus:border-neutral-800 focus:outline-neutral-800',
            [Tone.Critical]:
              'bg-neutral-800/[0.06] border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          },
          disabled: 'bg-neutral-800/[0.16] border-transparent',
        },
        [FormVariant.Solid]: {
          tone: {
            [Tone.Neutral]:
              'bg-white border-neutral-500 focus:border-neutral-800 focus:outline-neutral-800',
            [Tone.Critical]:
              'bg-white border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          },
          disabled: 'bg-white border-neutral-800/[0.36]',
        },
        [FormVariant.Transparent]: {
          tone: {
            [Tone.Neutral]:
              'bg-transparent border-transparent focus:border-neutral-800 focus:outline-neutral-800 hover:bg-neutral-100 hover:border-neutral-100',
            [Tone.Critical]:
              'bg-transparent border-critical-500 focus:border-critical-500 focus:outline-critical-500',
          },
          disabled: 'bg-transparent border-transparent',
        },
      },
      [Mode.Dark]: {
        base: {
          tone: {
            [Tone.Neutral]: 'text-white placeholder:text-white/[0.48]',
            [Tone.Critical]: 'text-white placeholder:text-white/[0.48]',
          },
          disabled: 'text-white/[0.36] placeholder:text-white/[0.36]',
        },
        [FormVariant.Ghost]: {
          tone: {
            [Tone.Neutral]:
              'bg-transparent border-neutral-200 focus:border-white focus:outline-white ',
            [Tone.Critical]:
              'bg-transparent border-critical-300 focus:border-critical-300 focus:outline-critical-300 ',
          },
          disabled: 'bg-transparent border-white/[0.36]',
        },
        [FormVariant.Soft]: {
          tone: {
            [Tone.Neutral]:
              'bg-white/[0.08] border-transparent focus:border-white focus:outline-white',
            [Tone.Critical]:
              'bg-white/[0.08] border-critical-300 focus:border-critical-300 focus:outline-critical-300',
          },
          disabled: 'bg-white/[0.16] border-transparent',
        },
        [FormVariant.Solid]: {
          tone: {
            [Tone.Neutral]:
              'bg-neutral-800 border-neutral-200 focus:border-white focus:outline-white ',
            [Tone.Critical]:
              'bg-neutral-800 border-critical-300 focus:border-critical-300 focus:outline-critical-300 ',
          },
          disabled: 'bg-neutral-800 border-white/[0.36]',
        },
        [FormVariant.Transparent]: {
          tone: {
            [Tone.Neutral]:
              'bg-transparent border-transparent focus:border-white focus:outline-white',
            [Tone.Critical]:
              'bg-transparent border-critical-300 focus:border-critical-300 focus:outline-critical-300',
          },
          disabled: 'bg-transparent border-transparent',
        },
      },
    },
    withIconStart: 'pl-11',
    withIconEnd: 'pr-11',
  },
  inputLabel: {
    base: 'block pb-1 ml-1 text-xs font-medium',
    [Mode.Light]: {
      tone: {
        [Tone.Neutral]: '',
        [Tone.Critical]: 'text-critical-500',
      },
      required: "after:content-['*'] after:ml-0.5",
      disabled: 'text-neutral-800/[0.36]',
    },
    [Mode.Dark]: {
      tone: {
        [Tone.Neutral]: 'text-white',
        [Tone.Critical]: 'text-critical-300',
      },
      required: "after:content-['*'] after:ml-0.5",
      disabled: 'text-white/[0.36]',
    },
  },
  inputMessage: {
    base: 'mt-1 block text-xs font-medium',
    indent: 'ml-1',
    [Mode.Light]: {
      tone: {
        [Tone.Neutral]: '',
        [Tone.Critical]: 'text-critical-500',
      },
      disabled: 'text-neutral-800/[0.36]',
    },
    [Mode.Dark]: {
      tone: {
        [Tone.Neutral]: 'text-white',
        [Tone.Critical]: 'text-critical-300',
      },
      disabled: 'text-white/[0.36]',
    },
  },
  inputIcon: {
    base: 'w-5 h-5 fill-current',
    [Mode.Light]: {
      normal: '',
      disabled: 'text-neutral-400',
    },
    [Mode.Dark]: {
      normal: 'text-white',
      disabled: 'text-neutral-400',
    },
    container: {
      base: 'absolute top-0 bottom-0 flex items-center pointer-events-none',
      [IconPosition.Start]: 'left-0 pl-3.5',
      [IconPosition.End]: 'right-0 pr-3.5',
    },
  },
  select: {
    base: 'pr-9 text-ellipsis overflow-hidden',
  },
  option: {
    base: 'bg-transparent',
    [Mode.Light]: {
      normal: '',
    },
    [Mode.Dark]: {
      normal: '',
    },
  },
  checkbox: {
    base: 'relative inline-flex items-start gap-x-2 align-bottom',
    normal: 'cursor-pointer',
    disabled: '',
    layout: {
      [CheckboxLayout.Start]: 'flex-row-reverse',
      [CheckboxLayout.End]: '',
      [CheckboxLayout.SpaceBetween]: 'w-full justify-between',
    },
    inputHeight: {
      base: 'min-h-[2.5rem]',
      size: {
        [Size.Sm]: 'pt-2',
        [Size.Md]: 'pt-1.5',
        [Size.Lg]: 'pt-0.5',
      },
    },
    input: {
      base: 'peer absolute h-0 w-0 opacity-0',
    },
    label: {
      base: '',
      mode: {
        [Mode.Light]: {
          normal: '',
          required: "after:content-['*'] after:ml-0.5",
          disabled: 'text-neutral-800/[0.36]',
        },
        [Mode.Dark]: {
          normal: 'text-white',
          required: "after:content-['*'] after:ml-0.5",
          disabled: 'text-white/[0.36]',
        },
      },
      size: {
        [Size.Sm]: '',
        [Size.Md]: 'pt-0.5',
        [Size.Lg]: 'pt-1.5',
      },
    },
    check: {
      base: 'block shrink-0 rounded-md outline-offset-[-1px] peer-focus:outline',
      normal: '',
      disabled: '',
      mode: {
        [Mode.Light]: 'outline-neutral-800',
        [Mode.Dark]: 'outline-white',
      },
      size: {
        [Size.Sm]: 'h-6 w-6',
        [Size.Md]: 'h-7 w-7',
        [Size.Lg]: 'h-9 w-9',
      },
      checked: {
        base: '[[type=checkbox]:not(:checked)~&]:hidden',
        modeState: {
          [Mode.Light]: {
            normal: 'fill-primary-500',
            disabled: 'fill-neutral-800/[0.36]',
          },
          [Mode.Dark]: {
            normal: 'fill-primary-300',
            disabled: 'fill-white/[0.36]',
          },
        },
      },
      unchecked: {
        base: '[[type=checkbox]:checked~&]:hidden',
        modeState: {
          [Mode.Light]: {
            normal: 'fill-neutral-800',
            disabled: 'fill-neutral-800/[0.36]',
          },
          [Mode.Dark]: {
            normal: 'fill-white',
            disabled: 'fill-white/[0.36]',
          },
        },
      },
    },
  },
  radio: {
    base: 'flex items-center gap-x-3',
    normal: 'cursor-pointer',
    disabled: '',
    layout: {
      [RadioLayout.Start]: '',
      [RadioLayout.End]: 'flex-row-reverse',
      [RadioLayout.SpaceBetween]: 'flex-row-reverse w-full justify-between',
    },
    inputHeight: {
      base: 'min-h-[2.5rem]',
      size: {
        [Size.Sm]: 'pt-2',
        [Size.Md]: 'pt-1.5',
        [Size.Lg]: 'pt-0.5',
      },
    },
    input: {
      base: 'peer absolute h-0 w-0 opacity-0',
      normal: 'cursor-pointer',
      disabled: '',
      size: {
        [Size.Sm]: 'h-4 w-4',
        [Size.Md]: 'h-5 w-5',
        [Size.Lg]: 'h-6 w-6',
      },
    },
    label: {
      base: '',
      mode: {
        [Mode.Light]: {
          normal: '',
          disabled: 'text-neutral-800/[0.36]',
        },
        [Mode.Dark]: {
          normal: 'text-white',
          disabled: 'text-white/[0.36]',
        },
      },
      size: {
        [Size.Sm]: '',
        [Size.Md]: '',
        [Size.Lg]: '',
      },
    },
    icon: {
      base: 'block shrink-0 rounded-full peer-focus:outline',
      normal: '',
      disabled: '',
      mode: {
        [Mode.Light]: 'outline-neutral-800',
        [Mode.Dark]: 'outline-white',
      },
      size: {
        [Size.Sm]: 'h-6 w-6',
        [Size.Md]: 'h-7 w-7',
        [Size.Lg]: 'h-9 w-9',
      },
      checked: {
        base: '[input:not(:checked)~&]:hidden',
        modeState: {
          [Mode.Light]: {
            normal: 'fill-primary-500',
            disabled: 'fill-neutral-800/[0.36]',
          },
          [Mode.Dark]: {
            normal: 'fill-primary-300',
            disabled: 'fill-white/[0.36]',
          },
        },
      },
      unchecked: {
        base: '[input:checked~&]:hidden',
        modeState: {
          [Mode.Light]: {
            normal: 'fill-neutral-800',
            disabled: 'fill-neutral-800/[0.36]',
          },
          [Mode.Dark]: {
            normal: 'fill-white',
            disabled: 'fill-white/[0.36]',
          },
        },
      },
    },
  },
  fieldset: {
    messageContainer: 'space-y-2',
    container: {
      indent: {
        [FieldSetIndent.None]: '',
        [FieldSetIndent.Label]: '',
        [FieldSetIndent.LabelAndChildren]: 'ml-1',
      },
    },
    legend: {
      indent: {
        [FieldSetIndent.None]: '',
        [FieldSetIndent.Label]: 'ml-1',
        [FieldSetIndent.LabelAndChildren]: '',
      },
    },
  },
  toggleSwitch: {
    base: 'relative inline-flex items-start gap-x-2',
    normal: 'cursor-pointer',
    disabled: '',
    layout: {
      [ToggleSwitchLayout.Start]: 'flex-row-reverse',
      [ToggleSwitchLayout.End]: '',
      [ToggleSwitchLayout.SpaceBetween]: 'w-full justify-between',
    },
    inputHeight: {
      base: 'min-h-[2.5rem]',
      size: {
        [Size.Sm]: 'pt-2',
        [Size.Md]: 'pt-1.5',
        [Size.Lg]: 'pt-0.5',
      },
    },
    input: {
      base: 'peer absolute h-0 w-0 opacity-0',
    },
    label: {
      base: '',
      mode: {
        [Mode.Light]: {
          normal: '',
          required: "after:content-['*'] after:ml-0.5",
          disabled: 'text-neutral-800/[0.36]',
        },
        [Mode.Dark]: {
          normal: 'text-white',
          required: "after:content-['*'] after:ml-0.5",
          disabled: 'text-white/[0.36]',
        },
      },
      size: {
        [Size.Sm]: '',
        [Size.Md]: 'pt-0.5',
        [Size.Lg]: 'pt-1.5',
      },
    },
    switch: {
      base: 'block shrink-0 rounded-full border-2 p-0.5 outline-offset-2 peer-focus:outline',
      normal: 'transition-colors duration-200 ease-in-out',
      disabled: '',
      modeState: {
        [Mode.Light]: {
          normal:
            'outline-neutral-800 border-neutral-600 [[type=checkbox]:checked~&]:border-transparent [[type=checkbox]:checked~&]:bg-primary-500',
          disabled:
            'border-neutral-800/[0.36] [[type=checkbox]:checked~&]:border-transparent [[type=checkbox]:checked~&]:bg-neutral-800/[0.36]',
        },
        [Mode.Dark]: {
          normal:
            'outline-white border-white [[type=checkbox]:checked~&]:border-transparent [[type=checkbox]:checked~&]:bg-primary-300',
          disabled:
            'border-white/[0.36] [[type=checkbox]:checked~&]:border-transparent [[type=checkbox]:checked~&]:bg-white/[0.26]',
        },
      },
      size: {
        [Size.Sm]: {
          base: 'w-10',
        },
        [Size.Md]: {
          base: 'w-12',
        },
        [Size.Lg]: {
          base: 'w-16',
        },
      },
    },
    handle: {
      base: 'block h-5 w-5 rounded-full',
      normal: 'transition duration-200 ease-in-out',
      disabled: '',
      modeState: {
        [Mode.Light]: {
          normal: 'bg-neutral-600 [[type=checkbox]:checked+span>&]:bg-white',
          disabled:
            'bg-neutral-800/[0.36] [[type=checkbox]:checked+span>&]:bg-white',
        },
        [Mode.Dark]: {
          normal: 'bg-white [[type=checkbox]:checked+span>&]:bg-neutral-800',
          disabled: 'bg-white/[0.36]',
        },
      },
      size: {
        [Size.Sm]:
          'h-4 w-4 translate-x-0 [[type=checkbox]:checked+span>&]:translate-x-4',
        [Size.Md]:
          'h-5 w-5 translate-x-0 [[type=checkbox]:checked+span>&]:translate-x-5',
        [Size.Lg]:
          'h-7 w-7 translate-x-0 [[type=checkbox]:checked+span>&]:translate-x-7',
      },
    },
  },
  formError: {
    base: 'xl:col-span-full',
  },
  selectItem: {
    input: {
      container: {
        base: 'flex flex-row text-left gap-x-2 focus-within:outline focus-within:-outline-offset-2',
        normal: 'focus-within:outline-neutral-800',
        error: 'focus-within:outline-critical-500',
      },
      selectButton: {
        base: 'flex-1 text-left -my-2.5 -ml-2 pl-2.5 focus:ring-0 focus:outline-hidden',
      },
      placeholder: {
        base: 'flex-1',
      },
      iconContainer: {
        base: 'mr-1',
        normal: 'focus:outline-neutral-800',
        error: 'focus:outline-critical-500',
      },
      icon: {
        base: 'h-5 w-5',
        disabled: 'fill-current',
      },
    },
    form: 'flex-1',
    dialogContentArea: {
      base: 'border-t border-neutral-200',
    },
    dialogHeaderSearch: 'my-2',
  },
  formSubmitFeedback: {
    base: 'flex items-center gap-x-2.5 text-sm font-medium text-success-700',
    icon: {
      base: 'h-5 w-5 shrink-0 fill-current',
    },
  },
}
