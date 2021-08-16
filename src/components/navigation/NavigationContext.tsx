import React from 'react'

type NavigationState = boolean
type NavigationToggle = () => void

const NavigationStateContext = React.createContext<NavigationState | undefined>(
  undefined
)
const NavigationToggleContext = React.createContext<
  NavigationToggle | undefined
>(undefined)

const navigationReducer = (state: NavigationState): NavigationState => {
  return !state
}

export const NavigationProvider: React.FC = ({ children }) => {
  const [state, toggle] = React.useReducer(navigationReducer, false)

  return (
    <NavigationStateContext.Provider value={state}>
      <NavigationToggleContext.Provider value={toggle}>
        {children}
      </NavigationToggleContext.Provider>
    </NavigationStateContext.Provider>
  )
}

export function useNavigationState(): NavigationState {
  const context = React.useContext(NavigationStateContext)

  if (context === undefined) {
    throw new Error(
      'useNavigationState must be used within a NavigationProvider'
    )
  }

  return context
}

export function useNavigationToggle(): NavigationToggle {
  const context = React.useContext(NavigationToggleContext)

  if (context === undefined) {
    throw new Error(
      'useNavigationToggle must be used within a NavigationToggleContext'
    )
  }

  return context
}
