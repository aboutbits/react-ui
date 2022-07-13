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
