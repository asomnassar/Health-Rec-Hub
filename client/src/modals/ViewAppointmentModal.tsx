import { Box, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import UserBox from "../components/Header/UserBox";
import DataBox from "../components/ProfileDataBox/DataBox";
import { FormsContext } from "../context/FormsContext";
import { handleDate } from "../functions/handleDate";
import { ProfileTypes } from "../types/store.types";

const ViewAppointmentModal = () => {
  const {
    openViewAppointmentModal,
    handleCloseViewAppointmentModal,
    editableAppointmentData,
  } = useContext(FormsContext);

  return (
    <Modal
      open={openViewAppointmentModal}
      onClose={handleCloseViewAppointmentModal}
    >
      <Box
        className={`bg-white absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[90vw] max-h-[90vh] min-w-[50%] rounded-lg overflow-auto p-4`}
      >
        {editableAppointmentData && (
          <Box className={`grid justify-stretch items-center gap-4`}>
            <Typography
              className={`text-center font-[700] text-primary`}
              variant="h3"
            >
              تفاصيل الموعد
            </Typography>
            <Box className={`grid justify-stretch items-center gap-4`}>
              <Box
                className={`flex justify-start items-center gap-2 flex-wrap`}
              >
                <Typography variant="h6" className={`font-[700]`}>
                  المريض :{" "}
                </Typography>
                <Link
                  to={`${import.meta.env.VITE_PATIENT_ROUTE}/${
                    (editableAppointmentData.patient as ProfileTypes)._id
                  }`}
                  onClick={handleCloseViewAppointmentModal}
                >
                  <UserBox
                    data={editableAppointmentData.patient as ProfileTypes}
                  />
                </Link>
              </Box>
              <DataBox
                title="التوقيت : "
                value={handleDate(editableAppointmentData.date)}
              />
              {editableAppointmentData.notes && (
                <DataBox
                  title="ملاحظة : "
                  value={editableAppointmentData.notes}
                />
              )}
              <DataBox
                title="الحالة : "
                value={
                  editableAppointmentData.status === "waiting"
                    ? "في الانتظار"
                    : "انتهى"
                }
              />
            </Box>
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default ViewAppointmentModal;
