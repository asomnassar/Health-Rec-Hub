import { Box, Skeleton, Typography } from "@mui/material";
import { PatientTableRowTypes } from "../../types/tables.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const LoadingRow = ({ row }: { row: PatientTableRowTypes }) => {
  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1">
          <Skeleton variant="text" />
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Skeleton variant="text" />
      </StyledTableCell>
      <StyledTableCell align="right">
        <Box className={`flex justify-end items-center flex-wrap gap-6`}>
          <Skeleton variant="circular" width={50} height={50} />
        </Box>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default LoadingRow;
