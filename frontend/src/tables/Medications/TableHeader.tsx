import { TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">اسم الدواء</StyledTableCell>
        <StyledTableCell align="left">الجرعة</StyledTableCell>
        <StyledTableCell align="right"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
