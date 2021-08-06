import React from 'react'

type MenuState = boolean
type MenuToggle = () => void

const MenuStateContext = React.createContext<MenuState | undefined>(undefined)
const MenuToggleContext = React.createContext<MenuToggle | undefined>(undefined)

const navigationReducer = (state: MenuState): MenuState => {
  return !state
}

const MenuProvider: React.FC = ({ children }) => {
  const [state, toggle] = React.useReducer(navigationReducer, false)

  return (
    <MenuStateContext.Provider value={state}>
      <MenuToggleContext.Provider value={toggle}>
        {children}
      </MenuToggleContext.Provider>
    </MenuStateContext.Provider>
  )
}

const useMenuState = (): MenuState => {
  const context = React.useContext(MenuStateContext)

  if (context === undefined) {
    throw new Error('useMenuState must be used within a MenuProvider')
  }

  return context
}

const useMenuToggle = (): MenuToggle => {
  const context = React.useContext(MenuToggleContext)

  if (context === undefined) {
    throw new Error('useMenuDispatch must be used within a MenuProvider')
  }

  return context
}

export { MenuProvider, useMenuToggle, useMenuState }
