import { Paper, Skeleton } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PatientAppointments from "../components/PatientAppointments/PatientAppointments";
import PatientMedicalRecord from "../components/PatientMedicalRecord/PatientMedicalRecord";
import PatientPrescriptions from "../components/PatientPrescriptions/PatientPrescriptions";
import PatientProcedures from "../components/PatientProcedures/PatientProcedures";
import LoadingPatientProfileBox from "../components/PatientProfileBox/LoadingPatientProfileBox";
import PatientProfileBox from "../components/PatientProfileBox/PatientProfileBox";
import PatientTestResults from "../components/PatientTestResults/PatientTestResults";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { getPatient } from "../store/patientSlice";
import { AppDispatch, RootState } from "../store/store";

const Patient = () => {
  const {
    patient,
    appointments,
    procedures,
    testResults,
    prescriptions,
    isLoading,
    medicalRecord,
  } = useSelector((state: RootState) => state.patient);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPatient({ id }));
  }, [dispatch, id]);

  return !isLoading && patient ? (
    <PrimaryBox>
      <PrimaryContainer className={`!grid justify-stretch items-start gap-8`}>
        <PatientProfileBox data={patient} />
        {medicalRecord && (
          <PatientMedicalRecord data={medicalRecord} isLoading={isLoading} />
        )}
        {appointments && (
          <PatientAppointments data={appointments} isLoading={isLoading} />
        )}
        {procedures && (
          <PatientProcedures data={procedures} isLoading={isLoading} />
        )}
        {prescriptions && (
          <PatientPrescriptions data={prescriptions} isLoading={isLoading} />
        )}
        {testResults && (
          <PatientTestResults data={testResults} isLoading={isLoading} />
        )}
      </PrimaryContainer>
    </PrimaryBox>
  ) : (
    <PrimaryBox>
      <PrimaryContainer className={`!grid justify-stretch items-start gap-8`}>
        <LoadingPatientProfileBox />
        {new Array(4).fill(0).map((_, i) => (
          <Paper className={`p-4`} key={i}>
            <Skeleton variant="text" className={`w-[40%]`} />
          </Paper>
        ))}
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Patient;
