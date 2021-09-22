import { createContext, useState, ReactNode, useContext } from "react";

interface TractianContextData {
  page: string;
  handleChangePage: (val: string) => void;
  menuOpen: boolean;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

interface TractianContextProviderProps {
  children: ReactNode;
}

export const TractianContext = createContext({} as TractianContextData);

export function TractianContextProvider({ children }: TractianContextProviderProps) {
  const [page, setPage] = useState('Home');
  const [menuOpen, setPenuOpen] = useState(false);

  function handleChangePage(value: string) {
    setPage(value)
  }

  function handleOpenMenu() {
    setPenuOpen(true)
  }

  function handleCloseMenu() {
    setPenuOpen(false)
  }

  return (
    <TractianContext.Provider
      value={{
        page,
        handleChangePage,
        menuOpen,
        handleOpenMenu,
        handleCloseMenu
      }}
    >
      {children}
    </TractianContext.Provider>
  )
}

export const useTractianContext = () => {
  return useContext(TractianContext);
}