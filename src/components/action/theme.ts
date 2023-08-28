import { ActionsPosition } from './types'

export default {
  actions: {
    base: 'flex flex-col lg:flex-row gap-2',
    position: {
      [ActionsPosition.Start]: 'lg:justify-start',
      [ActionsPosition.Center]: 'lg:justify-center',
      [ActionsPosition.End]: 'lg:justify-end',
    },
  },
}
