import { styled } from "@mui/material/styles";
import { PrimaryIconButton } from "./PrimaryIconButton";

export const BlockedIconButton = styled(PrimaryIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  "&:hover": {
    backgroundColor: theme.palette.error.dark,
  },
}));
