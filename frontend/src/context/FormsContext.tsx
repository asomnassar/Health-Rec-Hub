import { ReactNode, createContext, useState } from "react";
import { FormsContextTypes } from "../types/contexts.types";

export const FormsContext = createContext<FormsContextTypes>({
  uploadImage: null,
  setUploadImage: function (): void {
    throw new Error("Function not implemented.");
  },
  loading: false,
  setLoading: function (): void {
    throw new Error("Function not implemented.");
  },
  openForgotPasswordModal: false,
  handleOpenForgotPasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseForgotPasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditProfileModal: false,
  handleOpenEditProfileModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditProfileModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openChangePasswordModal: false,
  handleOpenChangePasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseChangePasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  openEditPatientModal: false,
  handleOpenEditPatientModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseEditPatientModal: function (): void {
    throw new Error("Function not implemented.");
  },
});

const FormsProvider = ({ children }: { children: ReactNode }) => {
  const [uploadImage, setUploadImage] = useState<File | string | null>(null);

  const [loading, setLoading] = useState(false);

  //Forgot Password
  const [openForgotPasswordModal, setOpenForgotPasswordModal] = useState(false);

  const handleOpenForgotPasswordModal = () => {
    setOpenForgotPasswordModal(true);
  };

  const handleCloseForgotPasswordModal = () => {
    setOpenForgotPasswordModal(false);
  };

  //Edit Profile
  const [openEditProfileModal, setOpenEditProfileModal] = useState(false);

  const handleOpenEditProfileModal = () => {
    setOpenEditProfileModal(true);
  };

  const handleCloseEditProfileModal = () => {
    setOpenEditProfileModal(false);
  };

  //Change Password
  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);

  const handleOpenChangePasswordModal = () => {
    setOpenChangePasswordModal(true);
  };

  const handleCloseChangePasswordModal = () => {
    setOpenChangePasswordModal(false);
  };

  //Edit Patient
  const [openEditPatientModal, setOpenEditPatientModal] = useState(false);

  const handleOpenEditPatientModal = () => {
    setOpenEditPatientModal(true);
  };

  const handleCloseEditPatientModal = () => {
    setOpenEditPatientModal(false);
  };

  const values = {
    uploadImage,
    setUploadImage,
    openForgotPasswordModal,
    handleOpenForgotPasswordModal,
    handleCloseForgotPasswordModal,
    openEditProfileModal,
    handleOpenEditProfileModal,
    handleCloseEditProfileModal,
    openChangePasswordModal,
    handleOpenChangePasswordModal,
    handleCloseChangePasswordModal,
    openEditPatientModal,
    handleOpenEditPatientModal,
    handleCloseEditPatientModal,
    loading,
    setLoading,
  };
  return (
    <FormsContext.Provider value={values}>{children}</FormsContext.Provider>
  );
};

export default FormsProvider;
