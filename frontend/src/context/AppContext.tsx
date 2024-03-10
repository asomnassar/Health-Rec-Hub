import { ReactNode, createContext, useState } from "react";
import { AppContextTypes } from "../types/modals.types";

export const AppContext = createContext<AppContextTypes>({
  openForgotPasswordModal: false,
  handleOpenForgotPasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseForgotPasswordModal: function (): void {
    throw new Error("Function not implemented.");
  }
})

const AppProvider = ({children}:{children:ReactNode}) => {

  const [openForgotPasswordModal,setOpenForgotPasswordModal] = useState(false)

  const handleOpenForgotPasswordModal=()=>{
    setOpenForgotPasswordModal(true)
  }

  const handleCloseForgotPasswordModal=()=>{
    setOpenForgotPasswordModal(false)
  }

  const values={
    openForgotPasswordModal,
    handleOpenForgotPasswordModal,handleCloseForgotPasswordModal
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
