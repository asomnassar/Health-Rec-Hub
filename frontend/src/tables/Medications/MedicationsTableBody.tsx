import { TableBody } from "@mui/material";
import { MedicationTypes } from "../../types/store.types";
import Row from "./Row";

const MedicationsTableBody = ({ data }: { data: MedicationTypes[] | null }) => {
  return (
    <TableBody>
      {data && data.map((row, i) => <Row index={i} key={i} row={row} />)}
    </TableBody>
  );
};

export default MedicationsTableBody;
