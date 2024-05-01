import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Logo from "../components/Logo/Logo";
import { FormsContext } from "../context/FormsContext";
import Forms from "../forms/Forms";

const ForgotPasswordModal = () => {
  const { openForgotPasswordModal, handleCloseForgotPasswordModal } =
    useContext(FormsContext);
  return (
    <Modal
      open={openForgotPasswordModal}
      onClose={handleCloseForgotPasswordModal}
    >
      <Box
        className={`bg-white absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[90vw] max-h-[90vh]  rounded-lg overflow-auto sm:w-[70vw]`}
      >
        <Box
          className={`grid justify-stretch items-center gap-4 p-4 md:p-3 sm:!p-2`}
        >
          <Logo />
          <Box className={`flex justify-center items-center w-[100%]`}>
            <Box className={`w-[40%] md:w-[75%] sm:!w-[100%]`}>
              <LazyLoadImage
                src={"/images/forgot.jpg"}
                alt={"Forgot Password"}
              />
            </Box>
          </Box>
          <Box className={`flex justify-center items-center`}>
            <Typography variant="h3" className={`text-primary font-[700]`}>
              نسيت كلمة السر ؟
            </Typography>
          </Box>
          <Forms type={"forgotPassword"} />
        </Box>
      </Box>
    </Modal>
  );
};

export default ForgotPasswordModal;
