import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../../context/FormsContext";
import { PrimaryButton } from "../../mui/PrimaryButton";
import AllergiesTable from "../../tables/Allergies/AllergiesTable";
import DiseasesTable from "../../tables/Diseases/DiseasesTable";
import MedicinesTable from "../../tables/Medicines/MedicinesTable";
import SurgeriesTable from "../../tables/Surgeries/SurgeriesTable";
import { MedicalRecordTypes } from "../../types/store.types";
import DataBox from "../PatientProfileBox/DataBox";

const PatientMedicalRecord = ({
  data,
  isLoading,
}: {
  data: MedicalRecordTypes;
  isLoading: boolean;
}) => {
  const {
    handleOpenEditMedicalRecordModal,
    setEditableMedicalRecordData,
    handleOpenAddSurgeryModal,
    handleOpenAddMedicineModal,
    handleOpenAddDiseaseModal,
    handleOpenAddAllergeryModal,
  } = useContext(FormsContext);

  const handleAddSurgery = () => {
    handleOpenAddSurgeryModal();
    setEditableMedicalRecordData(data);
  };

  const handleAddMedicine = () => {
    handleOpenAddMedicineModal();
    setEditableMedicalRecordData(data);
  };

  const handleAddAllergery = () => {
    handleOpenAddAllergeryModal();
    setEditableMedicalRecordData(data);
  };

  const handleAddDisease = () => {
    handleOpenAddDiseaseModal();
    setEditableMedicalRecordData(data);
  };

  const handleEdit = () => {
    handleOpenEditMedicalRecordModal();
    setEditableMedicalRecordData(data);
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h5" className={`font-[600] text-primary`}>
          السجل الطبى
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {!isLoading && data && (
          <Box className={`grid justify-stretch items-center gap-4`}>
            <Box
              className={`grid justify-stretch items-center gap-2 grid-cols-4 md:grid-cols-2 sm:!grid-cols-1`}
            >
              <DataBox title={"التشخيص : "} value={data.currentHealthIssuses} />
              <DataBox title={"ضغط الدم : "} value={data.bloodPressure} />
              <DataBox title={"معدل التنفس : "} value={data.respiratoryRate} />
              <DataBox title={"معدل نبضات القلب : "} value={data.heartRate} />
              <DataBox title={"زمرة الدم : "} value={data.bloodType} />
              <DataBox title={"الوزن : "} value={data.weigth} />
              <DataBox title={"الطول : "} value={data.height} />
              <DataBox
                title={"نسبة السكر بالدم : "}
                value={data.bloodSugarLevel}
              />
            </Box>
            <Box
              className={`grid justify-stretch items-start grid-cols-2 gap-4 md:grid-cols-1`}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    variant="h5"
                    className={`font-[600] text-primary`}
                  >
                    الجراحات
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box className={`grid justify-stretch items-center gap-4`}>
                    <SurgeriesTable data={data.surgeries} />
                    <PrimaryButton onClick={handleAddSurgery}>
                      اضف جراحة
                    </PrimaryButton>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    variant="h5"
                    className={`font-[600] text-primary`}
                  >
                    الامراض
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box className={`grid justify-stretch items-center gap-4`}>
                    <DiseasesTable data={data.diseases} />
                    <PrimaryButton onClick={handleAddDisease}>
                      اضف مرض
                    </PrimaryButton>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    variant="h5"
                    className={`font-[600] text-primary`}
                  >
                    الادوية
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box className={`grid justify-stretch items-center gap-4`}>
                    <MedicinesTable data={data.medicines} />
                    <PrimaryButton onClick={handleAddMedicine}>
                      اضف دواء
                    </PrimaryButton>
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography
                    variant="h5"
                    className={`font-[600] text-primary`}
                  >
                    الحساسية
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box className={`grid justify-stretch items-center gap-4`}>
                    <AllergiesTable data={data.allergies} />
                    <PrimaryButton onClick={handleAddAllergery}>
                      اضف حساسية
                    </PrimaryButton>
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <PrimaryButton onClick={handleEdit}>تعديل</PrimaryButton>
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientMedicalRecord;
