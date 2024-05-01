import { LoadingButton } from "@mui/lab";
import { CircularProgress } from "@mui/material";
import { ConfirmButton } from "../../mui/ConfirmButton";
import { PrimaryButton } from "../../mui/PrimaryButton";
import { SubmitButtonTypes } from "../../types/components.types";

const SubmitButton = ({ variant, loading, dt, children }:SubmitButtonTypes) => {

  const loadingIcon = (<CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />)

  let chosenButton = (<PrimaryButton title={"Submit Form"} loadingPosition={"center"}
    loading={loading} loadingIndicator={loadingIcon} fullWidth type={"submit"} data-test={dt}>{children}</PrimaryButton>)

  if (variant === "confirm") {
    chosenButton = (<ConfirmButton title={"Submit Form"} loadingPosition={"center"}
      loading={loading} loadingIndicator={loadingIcon} fullWidth type={"submit"} data-test={dt}>{children}</ConfirmButton>)
  }

  if (variant === "secondary") {
    chosenButton = (<PrimaryButton title={"Submit Form"} loadingPosition={"center"}
      loading={loading} loadingIndicator={loadingIcon} fullWidth type={"submit"} data-test={dt}>{children}</PrimaryButton>)
  }

  if (variant === "icon") {
    chosenButton = (<LoadingButton title={"Submit Form"} loadingPosition={"center"}
      loading={loading} loadingIndicator={loadingIcon} type={"submit"} data-test={dt}>{loading || children}</LoadingButton>)
  }

  return chosenButton
}

export default SubmitButton