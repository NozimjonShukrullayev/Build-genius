import { createContext } from "react";

export const MainContext = createContext({
    change: false,
});

export const MainContextProvider = ({ children, value }) => {
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
