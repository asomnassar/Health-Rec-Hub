import { TableHead, TableRow, useMediaQuery } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = () => {
  const xsScreen = useMediaQuery("(max-width:540px)");
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">اسم المريض</StyledTableCell>
        <StyledTableCell align="right">التفاصيل</StyledTableCell>
        {!xsScreen && <StyledTableCell align="right">التاريخ</StyledTableCell>}
        <StyledTableCell align="right"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
