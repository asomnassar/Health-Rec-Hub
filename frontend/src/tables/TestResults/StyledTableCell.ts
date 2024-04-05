import { TableCell, styled, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: 14,
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
      padding: "8px",
    },
  },
  [`&.${tableCellClasses.body}`]: {},
}));
