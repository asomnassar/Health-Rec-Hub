import { Box, Skeleton, Typography, useMediaQuery } from "@mui/material";
import { PatientTableRowTypes } from "../../types/tables.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const LoadingRow = ({
  row,
  view,
}: {
  row: PatientTableRowTypes;
  view?: boolean;
}) => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const xsScreen = useMediaQuery("(max-width:540px)");
  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1">
          <Skeleton variant="text" />
        </Typography>
      </StyledTableCell>
      {!smScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">
            <Skeleton variant="text" />
          </Typography>
        </StyledTableCell>
      )}
      {!xsScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">
            <Skeleton variant="text" />
          </Typography>
        </StyledTableCell>
      )}
      {!mdScreen && (
        <StyledTableCell align="right">
          <Skeleton variant="text" />
        </StyledTableCell>
      )}
      {!view && (
        <StyledTableCell align="right">
          <Box className={`flex justify-end items-center flex-wrap gap-6`}>
            <Skeleton variant="circular" width={50} height={50} />
          </Box>
        </StyledTableCell>
      )}
    </StyledTableRow>
  );
};

export default LoadingRow;
