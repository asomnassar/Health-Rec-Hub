import { styled } from "@mui/material/styles";
import { PrimaryButton } from "./PrimaryButton";

export const PrimaryIconButton = styled(PrimaryButton)(({ theme }) => ({
  borderRadius: "100px",
  padding: "0px !important",
  minWidth: "auto",
  width: "50px",
  height: "50px",
  [theme.breakpoints.down("lg")]: {
    width: "30px",
    height: "30px",
  },
  [theme.breakpoints.down("md")]: {
    width: "28px",
    height: "28px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "26px",
    height: "26px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "24px",
    height: "24px",
  },
}));
