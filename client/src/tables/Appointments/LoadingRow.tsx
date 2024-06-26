import {
  Box,
  Skeleton,
  TableRow,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { PatientTableRowTypes } from "../../types/tables.types";
import { StyledTableCell } from "./StyledTableCell";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const LoadingRow = ({ row }: { row: PatientTableRowTypes }) => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const xsScreen = useMediaQuery("(max-width:540px)");
  const { type } = useSelector((state: RootState) => state.auth);

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
      <StyledTableCell align="right">
        <Skeleton variant="text" />
      </StyledTableCell>
      {type === "systemManager" ||
        (mdScreen && (
          <StyledTableCell align="right">
            <Box className={`flex justify-end items-center flex-wrap gap-6`}>
              <Skeleton variant="circular" width={50} height={50} />
            </Box>
          </StyledTableCell>
        ))}
    </StyledTableRow>
  );
};

export default LoadingRow;
