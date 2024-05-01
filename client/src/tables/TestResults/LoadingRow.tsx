import { Box, Skeleton, Typography, useMediaQuery } from "@mui/material";
import { PatientTableRowTypes } from "../../types/tables.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const LoadingRow = ({ row }: { row: PatientTableRowTypes }) => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell align="right">
        <Typography variant="subtitle1">
          <Skeleton variant="text" />
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Typography variant="subtitle1">
          <Skeleton variant="text" />
        </Typography>
      </StyledTableCell>
      {!mdScreen && (
        <StyledTableCell align="right">
          <Skeleton variant="text" />
        </StyledTableCell>
      )}
      <StyledTableCell align="right">
        <Box className={`flex justify-end items-center flex-wrap gap-6`}>
          <Skeleton variant="circular" width={50} height={50} />
        </Box>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default LoadingRow;
