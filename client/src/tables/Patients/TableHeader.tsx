import { TableHead, TableRow, useMediaQuery } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = () => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const xsScreen = useMediaQuery("(max-width:540px)");
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">الاسم</StyledTableCell>
        {!smScreen && (
          <StyledTableCell align="right">البريد الالكترونى</StyledTableCell>
        )}
        {!xsScreen && (
          <StyledTableCell align="right">رقم الهاتف</StyledTableCell>
        )}
        {!mdScreen && <StyledTableCell align="right">العنوان</StyledTableCell>}
        <StyledTableCell align="right"></StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
