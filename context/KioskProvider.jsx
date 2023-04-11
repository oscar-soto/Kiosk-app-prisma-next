import { createContext } from "react"

const KioskContext = createContext();

export const KioskProvider = ({children}) => {
  return (
    <KioskContext.Provider value={{}}>
      {children}
    </KioskContext.Provider>
  )
}

export default KioskContext;