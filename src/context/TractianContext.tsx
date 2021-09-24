import { createContext, useState, ReactNode, useContext } from "react";
import { AssetsProps } from "../utils/types";

interface TractianContextData {
  page: string;
  handleChangePage: (val: string) => void;
  menuOpen: boolean;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
  modalAsset: AssetsProps | undefined;
  handleSetModalAsset: (data: AssetsProps) => void;
}

interface TractianContextProviderProps {
  children: ReactNode;
}

export const TractianContext = createContext({} as TractianContextData);

export function TractianContextProvider({ children }: TractianContextProviderProps) {
  const [page, setPage] = useState('Home');
  const [modalAsset, setModalAsset] = useState<AssetsProps>();
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

  function handleSetModalAsset(data: AssetsProps) {
    setModalAsset(data)
  }

  return (
    <TractianContext.Provider
      value={{
        page,
        handleChangePage,
        menuOpen,
        handleOpenMenu,
        handleCloseMenu,
        modalAsset,
        handleSetModalAsset
      }}
    >
      {children}
    </TractianContext.Provider>
  )
}

export const useTractianContext = () => {
  return useContext(TractianContext);
}