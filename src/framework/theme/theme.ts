export type Theme = typeof defaultTheme

import action from '../../components/action/theme'
import alert from '../../components/alert/theme'
import button from '../../components/button/theme'
import content from '../../components/content/theme'
import dialog from '../../components/dialog/theme'
import form from '../../components/form/theme'
import header from '../../components/header/theme'
import link from '../../components/link/theme'
import loading from '../../components/loading/theme'
import menu from '../../components/menu/theme'
import navigation from '../../components/navigation/theme'
import pagination from '../../components/pagination/theme'
import section from '../../components/section/theme'

export const defaultTheme = {
  action,
  alert,
  button,
  content,
  dialog,
  form,
  header,
  link,
  loading,
  section,
  menu,
  navigation,
  pagination,
}

export const customTheme = JSON.parse(JSON.stringify(defaultTheme))

customTheme.button.variantTone.solid.purple =
  'bg-purple-500 hover:bg-purple-600 text-white outline-purple-500'
customTheme.button.variantTone.ghost.purple =
  'hover:bg-purple-50 focus:bg-purple-50 border-purple-500 focus:border-transparent text-purple-500 outline-purple-500'
customTheme.button.variantTone.transparent.purple =
  'hover:bg-purple-50 text-purple-500 focus:outline-purple-500'
