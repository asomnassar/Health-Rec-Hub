import { TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">اسم المريض</StyledTableCell>
        <StyledTableCell align="right">الدواء</StyledTableCell>
        <StyledTableCell align="right"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
