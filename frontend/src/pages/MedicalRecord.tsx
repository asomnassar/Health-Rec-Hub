import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataBox from "../components/PatientProfileBox/DataBox";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { getMedicalRecord } from "../store/medicalRecordSlice";
import { AppDispatch, RootState } from "../store/store";
import AllergiesTable from "../tables/Allergies/AllergiesTable";
import DiseasesTable from "../tables/Diseases/DiseasesTable";
import MedicinesTable from "../tables/Medicines/MedicinesTable";
import SurgeriesTable from "../tables/Surgeries/SurgeriesTable";

const MedicalRecord = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { medicalRecord, isLoading } = useSelector(
    (state: RootState) => state.medicalRecord
  );

  useEffect(() => {
    dispatch(getMedicalRecord());
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className="!grid justify-stretch items-center gap-4">
        {!isLoading && medicalRecord && (
          <Box className={`grid justify-stretch items-center gap-4`}>
            <Box
              className={`grid justify-stretch items-center gap-2 grid-cols-4 md:grid-cols-2 sm:!grid-cols-1`}
            >
              <DataBox
                title={"ضغط الدم : "}
                value={medicalRecord.bloodPressure}
              />
              <DataBox
                title={"معدل التنفس : "}
                value={medicalRecord.respiratoryRate}
              />
              <DataBox
                title={"معدل نبضات القلب : "}
                value={medicalRecord.heartRate}
              />
              <DataBox title={"زمرة الدم : "} value={medicalRecord.bloodType} />
              <DataBox title={"الوزن : "} value={medicalRecord.weigth} />
              <DataBox title={"الطول : "} value={medicalRecord.height} />
              <DataBox
                title={"نسبة السكر بالدم : "}
                value={medicalRecord.bloodSugarLevel}
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
                    <SurgeriesTable
                      view={true}
                      data={medicalRecord.surgeries}
                    />
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
                    <DiseasesTable view={true} data={medicalRecord.diseases} />
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
                    <MedicinesTable
                      view={true}
                      data={medicalRecord.medicines}
                    />
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
                    <AllergiesTable
                      view={true}
                      data={medicalRecord.allergies}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        )}
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default MedicalRecord;
