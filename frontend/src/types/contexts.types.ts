interface AppContextTypes {}

interface FormsContextTypes {
  uploadImage: File | string | null;
  setUploadImage: (uploadImage: File | string | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  openForgotPasswordModal: boolean;
  handleOpenForgotPasswordModal: () => void;
  handleCloseForgotPasswordModal: () => void;
  openEditProfileModal: boolean;
  handleOpenEditProfileModal: () => void;
  handleCloseEditProfileModal: () => void;
  openChangePasswordModal: boolean;
  handleOpenChangePasswordModal: () => void;
  handleCloseChangePasswordModal: () => void;
  openEditPatientModal: boolean;
  handleOpenEditPatientModal: () => void;
  handleCloseEditPatientModal: () => void;
}

export type { AppContextTypes, FormsContextTypes };
