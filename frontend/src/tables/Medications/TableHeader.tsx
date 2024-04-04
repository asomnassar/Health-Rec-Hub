import { TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = ({ view }: { view?: boolean }) => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">اسم الدواء</StyledTableCell>
        <StyledTableCell align="left">الجرعة</StyledTableCell>
        {!view && <StyledTableCell align="right"></StyledTableCell>}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
