import { styled } from "@mui/material/styles";
import { PrimaryIconButton } from "./PrimaryIconButton";

export const PendingIconButton = styled(PrimaryIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  "&:hover": {
    backgroundColor: theme.palette.warning.dark,
  },
}));
