import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ProceduresTable from "../../tables/Procedures/ProceduresTable";
import { TestResultsTypes } from "../../types/store.types";

const PatientTestResults = ({
  data,
  isLoading,
}: {
  data: TestResultsTypes[];
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
          اختبارات المريض
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ProceduresTable data={data} isLoading={isLoading} />
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientTestResults;
