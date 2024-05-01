import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FormsContext } from "../context/FormsContext";
import MedicationsTable from "../tables/Medications/MedicationsTable";

const ViewPrescriptionModal = () => {
  const { openViewPrescriptionModal, handleCloseViewPrescriptionModal } =
    useContext(AppContext);
  const { medications } = useContext(FormsContext);
  return (
    <Modal
      open={openViewPrescriptionModal}
      onClose={handleCloseViewPrescriptionModal}
    >
      <Box
        className={`bg-white absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[90vw] max-h-[90vh] min-w-[50%] rounded-lg overflow-auto p-4`}
      >
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Typography
            className={`text-center font-[700] text-primary`}
            variant="h3"
          >
            الروشتة
          </Typography>
          <MedicationsTable data={medications} view={true} />
        </Box>
      </Box>
    </Modal>
  );
};

export default ViewPrescriptionModal;
