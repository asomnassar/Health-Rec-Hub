import { Typography, useMediaQuery } from "@mui/material";
import { handleDate } from "../../functions/handleDate";
import { ProcedureTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const Row = ({ row }: { row: ProcedureTypes }) => {
  const smScreen = useMediaQuery("(max-width:768px)");

  return (
    <StyledTableRow
      key={row._id}
      className={`cursor-pointer group hover:!bg-dark-gray`}
    >
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1" className={`group-hover:underline`}>
          {row.patient.username}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Typography variant="subtitle1">{row.details}</Typography>
      </StyledTableCell>
      {!smScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">
            {handleDate(row.updatedAt)}
          </Typography>
        </StyledTableCell>
      )}
      <StyledTableCell align="right">
        <Typography variant="subtitle1"></Typography>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default Row;
