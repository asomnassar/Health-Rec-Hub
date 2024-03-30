import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import PrescriptionsTable from "../../tables/Prescriptions/PrescriptionsTable";
import { PrescriptionTypes } from "../../types/store.types";

const PatientPrescriptions = ({
  data,
  isLoading,
}: {
  data: PrescriptionTypes[];
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
          روشتات المريض
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <PrescriptionsTable data={data} isLoading={isLoading} />
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientPrescriptions;
