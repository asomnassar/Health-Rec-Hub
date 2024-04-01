import { Typography, useMediaQuery } from "@mui/material";
import { PrescriptionTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const Row = ({ row }: { row: PrescriptionTypes }) => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const xsScreen = useMediaQuery("(max-width:540px)");

  return (
    <StyledTableRow
      key={row._id}
      className={`cursor-pointer group hover:!bg-dark-gray`}
    >
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1" className={`group-hover:underline`}>
          {}
        </Typography>
      </StyledTableCell>
      {!smScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{}</Typography>
        </StyledTableCell>
      )}
      {!xsScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{}</Typography>
        </StyledTableCell>
      )}
      {!mdScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{}</Typography>
        </StyledTableCell>
      )}
    </StyledTableRow>
  );
};

export default Row;
