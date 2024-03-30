import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import AppointmentsTable from "../../tables/Appointments/AppointmentsTable";
import { AppointmentTypes } from "../../types/store.types";

const PatientAppointments = ({
  data,
  isLoading,
}: {
  data: [AppointmentTypes];
  isLoading: boolean;
}) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h5" className={`font-[600] text-primary`}>
          مواعيد المريض
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <AppointmentsTable data={data} isLoading={isLoading} />
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientAppointments;
