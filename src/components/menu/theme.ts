import { MenuDirection } from './types'

export default {
  menuContainer: 'relative',
  menuButton: {
    base: 'flex items-center underline focus:no-underline focus:outline-none focus:ring',
    icon: {
      base: 'w-6 h-6 fill-current',
      direction: {
        [MenuDirection.Up]: {
          state: {
            open: 'rotate-180 transform',
            closed: '',
          },
        },
        [MenuDirection.Down]: {
          state: {
            open: '',
            closed: 'rotate-180 transform',
          },
        },
      },
    },
  },
  menuItem: {
    base: 'block py-1 px-4 cursor-pointer hover:bg-primary-100 w-full text-left',
    active: 'bg-primary-100',
  },
  menuList: {
    base: 'py-2 mb-2 w-32 shadow focus:outline-none bg-white absolute',
    direction: {
      [MenuDirection.Up]: '-mt-2 -translate-y-full',
      [MenuDirection.Down]: '',
    },
  },
}
