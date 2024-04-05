import { Box, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";
import { FormsContext } from "../../context/FormsContext";
import { handleDate } from "../../functions/handleDate";
import { PrimaryButton } from "../../mui/PrimaryButton";
import { SecondaryButton } from "../../mui/SecondaryButton";
import { RootState } from "../../store/store";
import { PatientTypes } from "../../types/store.types";
import DataBox from "./DataBox";

const PatientProfileBox = ({ data }: { data: PatientTypes }) => {
  const { type } = useSelector((state: RootState) => state.auth);
  const { medicalRecord } = useSelector((state: RootState) => state.patient);
  const {
    handleOpenAddAppointmentModal,
    handleOpenAddProcedureModal,
    handleOpenAddPrescriptionModal,
    handleOpenAddTestResultModal,
    handleOpenEditPatientModal,
    handleOpenAddMedicalRecordModal,
  } = useContext(FormsContext);

  return (
    <Paper
      className={`grid justify-stretch items-center gap-6 p-4 md:gap-4 md:p-3`}
    >
      <Typography variant="h5" className={`font-[600] text-primary`}>
        ملف المريض الشخصى
      </Typography>
      <Box
        className={`grid justify-stretch items-start gap-8 grid-cols-[1fr,auto] md:grid-cols-1 md:justify-center`}
      >
        <Box
          className={`grid justify-stretch items-center gap-4 md:gap-3 sm:!gap-2 md:justify-center`}
        >
          <Box
            className={`w-[260px] h-[260px] flex justify-center items-center rounded-full overflow-hidden`}
          >
            <LazyLoadImage src={data.avatar} alt={"avatar"} />
          </Box>
          <Typography
            variant="h5"
            className={`font-[600] text-center text-primary`}
          >
            {data.username}
          </Typography>
        </Box>
        <Box className={`grid justify-start items-center gap-10`}>
          <Box className={`grid justify-start items-center gap-6`}>
            <Typography variant="h5" className={`text-primary font-[600]`}>
              بيانات المريض
            </Typography>
            <Box
              className={`flex justify-stretch items-center gap-8 flex-wrap`}
            >
              <DataBox title={"الاسم الاول : "} value={data.firstName} />
              <DataBox title={"الاسم الاخير : "} value={data.lastName} />
              <DataBox title={"البريد الالكنرونى : "} value={data.email} />
              <DataBox title={"رقم الهاتف : "} value={data.phone} />
              <DataBox title={"الجنس : "} value={data.gender} />
              <DataBox title={"العنوان : "} value={data.address} />
              <DataBox
                title={"تاريخ الميلاد : "}
                value={handleDate(data.dateOfBirth)}
              />
              <DataBox title={"العمر : "} value={data.age} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={`flex justify-center items-center gap-4 md:gap-3 sm:!gap-2 flex-wrap`}
      >
        {type === "systemManager" && (
          <>
            <SecondaryButton onClick={handleOpenEditPatientModal}>
              تعديل ملف المريض
            </SecondaryButton>
            <PrimaryButton onClick={handleOpenAddAppointmentModal}>
              اضف موعد
            </PrimaryButton>
          </>
        )}
        {type === "doctor" && (
          <>
            <PrimaryButton onClick={handleOpenAddPrescriptionModal}>
              اضف روشتة
            </PrimaryButton>
            <PrimaryButton onClick={handleOpenAddProcedureModal}>
              اضف اجراء
            </PrimaryButton>
            <PrimaryButton onClick={handleOpenAddTestResultModal}>
              اضف اختبار
            </PrimaryButton>
            {!medicalRecord && (
              <PrimaryButton onClick={handleOpenAddMedicalRecordModal}>
                اضف سجل طبى
              </PrimaryButton>
            )}
          </>
        )}
      </Box>
    </Paper>
  );
};

export default PatientProfileBox;
