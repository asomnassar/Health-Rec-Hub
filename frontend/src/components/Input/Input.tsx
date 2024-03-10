import { Box, Typography } from "@mui/material";
import { PrimaryTextField } from "../../mui/PrimaryTextField";
import { FormInputTypes } from "../../types/forms.types";

const Input = ({register,errors,name,label,type}:FormInputTypes) => {
  return name &&(
    <Box className={`grid justify-stretch items-center gap-2`}>
      <Typography variant={"h6"}>{label}</Typography>
      <PrimaryTextField
        {...register(name)}
        fullWidth
        type={type || "text"}
        error={!!errors[name]}
        helperText={errors[name]?.message }
      />
    </Box>
  )
}

export default Input