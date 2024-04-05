import { TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "./StyledTableCell";

const TableHeader = ({ view }: { view?: boolean }) => {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell align="right">الحساسية</StyledTableCell>
        {!view && <StyledTableCell align="right"></StyledTableCell>}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
