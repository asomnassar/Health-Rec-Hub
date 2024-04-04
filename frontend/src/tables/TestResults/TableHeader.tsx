import { TableHead, TableRow, useMediaQuery } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = () => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">اسم المريض</StyledTableCell>
        <StyledTableCell align="right">نوع الاختبار</StyledTableCell>
        {!mdScreen && <StyledTableCell align="right">التاريخ</StyledTableCell>}
        <StyledTableCell align="right"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
