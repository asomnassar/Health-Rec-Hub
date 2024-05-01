import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../context/FormsContext";
import Forms from "../forms/Forms";

const EditProfileModal = () => {
  const { openEditProfileModal, handleCloseEditProfileModal } =
    useContext(FormsContext);
  return (
    <Modal open={openEditProfileModal} onClose={handleCloseEditProfileModal}>
      <Box
        className={`bg-white absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[90vw] max-h-[90vh]  rounded-lg min-w-[60vw] overflow-auto p-4 md:w-[75vw] sm:!w-[90vw]`}
      >
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Typography
            className={`text-center font-[700] text-primary`}
            variant="h3"
          >
            تعديل الملف
          </Typography>
          <Forms type={"editProfile"} />
        </Box>
      </Box>
    </Modal>
  );
};

export default EditProfileModal;
