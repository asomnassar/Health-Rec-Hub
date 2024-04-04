import { TableBody } from "@mui/material";
import { handleRandomNumber } from "../../functions/handleRandomNumber";
import LoadingRow from "./LoadingRow";

const LoadingMedicationsTableBody = () => {
  return (
    <TableBody>
      {new Array(handleRandomNumber()).fill(0).map((row, i) => (
        <LoadingRow key={i} row={row} />
      ))}
    </TableBody>
  );
};

export default LoadingMedicationsTableBody;
