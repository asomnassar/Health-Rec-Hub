interface AppContextTypes {}

interface FormsContextTypes {
  uploadImage: File | null;
  setUploadImage: (uploadImage: File | null) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  openForgotPasswordModal: boolean;
  handleOpenForgotPasswordModal: () => void;
  handleCloseForgotPasswordModal: () => void;
}

export type { AppContextTypes, FormsContextTypes };
