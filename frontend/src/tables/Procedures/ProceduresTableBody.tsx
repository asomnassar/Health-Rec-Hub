import { TableBody } from "@mui/material";
import { ProceduresTypes } from "../../types/store.types";
import Row from "./Row";

const ProceduresTableBody = ({ data }: { data: ProceduresTypes[] | null }) => {
  return (
    <TableBody>
      {data && data.map((row, i) => <Row key={i} row={row} />)}
    </TableBody>
  );
};

export default ProceduresTableBody;
