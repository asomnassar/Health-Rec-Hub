import { TableBody } from "@mui/material";
import { TestResultTypes } from "../../types/store.types";
import Row from "./Row";

const TestResultsTableBody = ({ data }: { data: TestResultTypes[] | null }) => {
  return (
    <TableBody>
      {data && data.map((row, i) => <Row key={i} row={row} />)}
    </TableBody>
  );
};

export default TestResultsTableBody;
