import { TableBody } from "@mui/material";
import { AppointmentTypes } from "../../types/store.types";
import Row from "./Row";

const AppointmentsTableBody = ({
  data,
}: {
  data: AppointmentTypes[] | null;
}) => {
  return (
    <TableBody>
      {data && data.map((row, i) => <Row key={i} row={row} />)}
    </TableBody>
  );
};

export default AppointmentsTableBody;
