import { TableBody } from "@mui/material";
import { PatientTypes } from "../../types/store.types";
import Row from "./Row";

const PatientsTableBody = ({ data }: { data: PatientTypes[] | null }) => {
  return (
    <TableBody>
      {data && data.map((row, i) => <Row key={i} row={row} />)}
    </TableBody>
  );
};

export default PatientsTableBody;
