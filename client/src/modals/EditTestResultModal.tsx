import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../context/FormsContext";
import Forms from "../forms/Forms";

const EditTestResultModal = () => {
  const { openEditTestResultModal, handleCloseEditTestResultModal } =
    useContext(FormsContext);
  return (
    <Modal
      open={openEditTestResultModal}
      onClose={handleCloseEditTestResultModal}
    >
      <Box
        className={`bg-white absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[90vw] max-h-[90vh] min-w-[50%] rounded-lg overflow-auto p-4`}
      >
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Typography
            className={`text-center font-[700] text-primary`}
            variant="h3"
          >
            تعديل نتائج الاختبار
          </Typography>
          <Forms type={"editTestResult"} />
        </Box>
      </Box>
    </Modal>
  );
};

export default EditTestResultModal;
