import { ReactNode, createContext, useState } from "react";
import { FormsContextTypes } from "../types/contexts.types";

export const FormsContext = createContext<FormsContextTypes>({
  uploadImage:null,
  setUploadImage:function (): void {
    throw new Error("Function not implemented.");
  },
  loading:false,
  setLoading:function (): void {
    throw new Error("Function not implemented.");
  },
  openForgotPasswordModal: false,
  handleOpenForgotPasswordModal: function (): void {
    throw new Error("Function not implemented.");
  },
  handleCloseForgotPasswordModal: function (): void {
    throw new Error("Function not implemented.");
  }
})

const FormsProvider = ({children}:{children:ReactNode}) => {
  const [uploadImage,setUploadImage] = useState<File | null>(null)

  const [loading,setLoading] = useState(false)

  const [openForgotPasswordModal,setOpenForgotPasswordModal] = useState(false)

  const handleOpenForgotPasswordModal=()=>{
    setOpenForgotPasswordModal(true)
  }

  const handleCloseForgotPasswordModal=()=>{
    setOpenForgotPasswordModal(false)
  }

  const values={
    uploadImage,
    setUploadImage,
    openForgotPasswordModal,
    handleOpenForgotPasswordModal,handleCloseForgotPasswordModal,
    loading,setLoading
  }
  return <FormsContext.Provider value={values}>{children}</FormsContext.Provider>;
};

export default FormsProvider;
