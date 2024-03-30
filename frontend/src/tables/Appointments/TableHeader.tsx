import { TableHead, TableRow, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = () => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const xsScreen = useMediaQuery("(max-width:540px)");
  const { type } = useSelector((state: RootState) => state.auth);
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">اسم المريض</StyledTableCell>
        {!xsScreen && <StyledTableCell align="right">التاريخ</StyledTableCell>}
        {!smScreen && <StyledTableCell align="right">الساعة</StyledTableCell>}
        {!mdScreen && <StyledTableCell align="right">ملاحظات</StyledTableCell>}
        <StyledTableCell align="right">الحالة</StyledTableCell>
        {type === "systemManager" && (
          <StyledTableCell align="right"></StyledTableCell>
        )}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
