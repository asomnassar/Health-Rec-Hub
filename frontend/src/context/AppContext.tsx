import { ReactNode, createContext } from "react";

export const AppContext = createContext({})

const AppProvider = ({children}:{children:ReactNode}) => {

  const values={
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
