import { TableHead, TableRow, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = () => {
  const xsScreen = useMediaQuery("(max-width:540px)");
  const { type } = useSelector((state: RootState) => state.auth);
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">اسم المريض</StyledTableCell>
        <StyledTableCell align="right">التفاصيل</StyledTableCell>
        {!xsScreen && <StyledTableCell align="right">التاريخ</StyledTableCell>}
        {type === "doctor" && <StyledTableCell align="right"></StyledTableCell>}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
