import { styled } from "@mui/material/styles";
import { PrimaryIconButton } from "./PrimaryIconButton";

export const ActiveIconButton = styled(PrimaryIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.success.dark,
  "&:hover": {
    backgroundColor: theme.palette.success.dark,
  },
}));
