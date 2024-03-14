import { BlockRounded, CheckRounded, PendingRounded } from "@mui/icons-material";
import { Box, TableRow, Tooltip, Typography, styled, useMediaQuery } from "@mui/material";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { BlockedIconButton } from "../../mui/BlockedIconButton";
import { PendingIconButton } from "../../mui/PendingIconButton";
import { PatientTableRowTypes } from "../../types/tables.types";
import { StyledTableCell } from "./StyledTableCell";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Row = ({row}:{row:PatientTableRowTypes}) => {
  const mdScreen = useMediaQuery("(max-width:992px)")
  const smScreen = useMediaQuery("(max-width:768px)")
  const xsScreen = useMediaQuery("(max-width:540px)")
  
  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1" >{row.username}</Typography>
      </StyledTableCell>
      {!smScreen && <StyledTableCell align="right">
        <Typography variant="subtitle1" >{row.email}</Typography>
      </StyledTableCell>}
      {!xsScreen && <StyledTableCell align="right">
        <Typography variant="subtitle1" >{row.phone}</Typography>
      </StyledTableCell>}
      {!mdScreen && <StyledTableCell align="right">
        <Typography variant="subtitle1" >{row.address}</Typography>
      </StyledTableCell>}
      <StyledTableCell align="right">
        <Box className={`flex justify-start items-center flex-wrap gap-2`}>
          <Tooltip title={"حذر"}>
            <BlockedIconButton>
              <BlockRounded/>
            </BlockedIconButton>
          </Tooltip>
          <Tooltip title={"انتظار"}>
            <PendingIconButton>
              <PendingRounded/>
            </PendingIconButton>
          </Tooltip>
          <Tooltip title={"تفعيل"}>
            <ActiveIconButton>
              <CheckRounded/>
            </ActiveIconButton>
          </Tooltip>
        </Box>
      </StyledTableCell>
    </StyledTableRow>
  )
}

export default Row