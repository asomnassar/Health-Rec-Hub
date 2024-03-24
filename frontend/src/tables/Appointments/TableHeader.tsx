import { TableHead, TableRow, useMediaQuery } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = () => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const xsScreen = useMediaQuery("(max-width:540px)");
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">اسم المريض</StyledTableCell>
        {!xsScreen && <StyledTableCell align="right">التاريخ</StyledTableCell>}
        {!smScreen && <StyledTableCell align="right">الساعة</StyledTableCell>}
        {!mdScreen && <StyledTableCell align="right">ملاحظات</StyledTableCell>}
        <StyledTableCell align="right">الحالة</StyledTableCell>
        <StyledTableCell align="right"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
