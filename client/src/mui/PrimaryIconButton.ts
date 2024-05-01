import { styled } from "@mui/material/styles";
import { PrimaryButton } from "./PrimaryButton";

export const PrimaryIconButton = styled(PrimaryButton)(({ theme }) => ({
  borderRadius: "100px !important",
  padding: "0px !important",
  minWidth: "auto",
  width: "50px",
  height: "50px",
  [theme.breakpoints.down("lg")]: {
    width: "45px",
    height: "45px",
  },
  [theme.breakpoints.down("md")]: {
    width: "40px",
    height: "40px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "35px",
    height: "35px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "25px",
    height: "25px",
  },
}));
