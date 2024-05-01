import { Paper, Table, TableContainer } from "@mui/material";
import { ReactNode } from "react";

const PrimaryTable = ({ children }: { children: ReactNode }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">{children}</Table>
    </TableContainer>
  );
};

export default PrimaryTable;
