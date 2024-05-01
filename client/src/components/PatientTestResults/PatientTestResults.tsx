import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import TestResultsTable from "../../tables/TestResults/TestResultsTable";
import { TestResultTypes } from "../../types/store.types";

const PatientTestResults = ({
  data,
  isLoading,
}: {
  data: TestResultTypes[];
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
        <TestResultsTable data={data} isLoading={isLoading} />
      </AccordionDetails>
    </Accordion>
  );
};

export default PatientTestResults;
