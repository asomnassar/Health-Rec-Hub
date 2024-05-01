import { ReactNode, createContext, useState } from "react";
import { AppContextTypes } from "../types/contexts.types";

export const AppContext = createContext<AppContextTypes>({
  openViewPrescriptionModal: false,
  handleOpenViewPrescriptionModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseViewPrescriptionModal: function (): void {
    throw new Error("Function not implemented.");
  },
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  //Edi TestResult
  const [openViewPrescriptionModal, setOpenViewPresciriptionModal] =
    useState(false);

  const handleOpenViewPrescriptionModal = () => {
    setOpenViewPresciriptionModal(true);
  };

  const handleCloseViewPrescriptionModal = () => {
    setOpenViewPresciriptionModal(false);
  };

  const values = {
    openViewPrescriptionModal,
    handleOpenViewPrescriptionModal,
    handleCloseViewPrescriptionModal,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
