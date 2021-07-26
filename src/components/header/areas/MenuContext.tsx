import React from 'react'

type MenuToggle = () => void

const MenuToggleContext = React.createContext<MenuToggle | undefined>(undefined)

const useMenuToggle = (): MenuToggle => {
  const context = React.useContext(MenuToggleContext)

  if (context === undefined) {
    throw new Error('useMenuDispatch must be used within a MenuProvider')
  }

  return context
}

export { useMenuToggle }
