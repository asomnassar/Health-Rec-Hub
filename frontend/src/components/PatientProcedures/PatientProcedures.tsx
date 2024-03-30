import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ProceduresTable from "../../tables/Procedures/ProceduresTable";
import { ProcedureTypes } from "../../types/store.types";

const PatientProcedures = ({
  data,
  isLoading,
}: {
  data: ProcedureTypes[];
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
          اجراءات المريض
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ProceduresTable data={data} isLoading={isLoading} />
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientProcedures;
