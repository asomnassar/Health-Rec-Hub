import { TableBody } from "@mui/material";
import { MedicationTypes } from "../../types/store.types";
import Row from "./Row";

const MedicationsTableBody = ({
  data,
  view,
}: {
  data: MedicationTypes[] | null;
  view?: boolean;
}) => {
  return (
    <TableBody>
      {data &&
        data.map((row, i) => <Row view={view} index={i} key={i} row={row} />)}
    </TableBody>
  );
};

export default MedicationsTableBody;
