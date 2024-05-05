import { Box, InputLabel, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { PrimaryTextField } from "../../mui/PrimaryTextField";
import { FormInputTypes } from "../../types/forms.types";

const Input = ({
  register,
  errors,
  name,
  label,
  type,
  select,
  data,
  ac,
  rows,
  multiline,
  handling,
}: FormInputTypes) => {
  return name && select ? (
    <Box className={`grid justify-stretch items-center gap-2`}>
      <InputLabel htmlFor={name}>
        <Typography variant={"h6"}>{label}</Typography>
      </InputLabel>
      <PrimaryTextField
        {...(register && register(name))}
        fullWidth
        error={errors && !!errors[name]}
        helperText={errors && errors[name]?.message}
        select
        SelectProps={{
          native: true,
        }}
        autoComplete={ac}
      >
        {data &&
          data.map((option, i) => (
            <option value={option} key={i}>
              {option}
            </option>
          ))}
      </PrimaryTextField>
    </Box>
  ) : (
    <Box className={`grid justify-stretch items-center gap-2`}>
      <Typography variant={"h6"}>{label}</Typography>
      <PrimaryTextField
        {...(register && register(name))}
        fullWidth
        type={type || "text"}
        error={errors && !!errors[name]}
        helperText={errors && errors[name]?.message}
        autoComplete={ac}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          if (handling) {
            handling(event.target.value);
          }
        }}
        inputProps={{
          id: name,
        }}
        multiline={multiline}
        rows={rows}
      />
    </Box>
  );
};

export default Input;
