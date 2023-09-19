export type Theme = typeof defaultTheme

import action from '../../components/action/theme'
import alert from '../../components/alert/theme'
import breadcrumbs from '../../components/breadcrumbs/theme'
import button from '../../components/button/theme'
import content from '../../components/content/theme'
import dialog from '../../components/dialog/theme'
import form from '../../components/form/theme'
import header from '../../components/header/theme'
import link from '../../components/link/theme'
import loading from '../../components/loading/theme'
import menu from '../../components/menu/theme'
import pagination from '../../components/pagination/theme'
import section from '../../components/section/theme'
import tabs from '../../components/tabs/theme'
import filter from '../../components/filter/theme'

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
  breadcrumbs,
  section,
  menu,
  pagination,
  tabs,
  filter,
}
