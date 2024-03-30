import { TableBody } from "@mui/material";
import { PrescriptionTypes } from "../../types/store.types";
import Row from "./Row";

const PrescriptionsTableBody = ({
  data,
}: {
  data: PrescriptionTypes[] | null;
}) => {
  return (
    <TableBody>
      {data && data.map((row, i) => <Row key={i} row={row} />)}
    </TableBody>
  );
};

export default PrescriptionsTableBody;
