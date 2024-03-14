import { Box, Typography } from "@mui/material"
import Logo from "../components/Logo/Logo"
import Forms from "../forms/Forms"
import { PrimaryBox } from "../mui/PrimaryBox"
import { PrimaryContainer } from "../mui/PrimaryContiner"

const ResetPassword = () => {
  return (
    <PrimaryBox className={`h-full`}>
      <PrimaryContainer className="h-full w-full !grid grid-cols-2 justify-stretch items-center gap-6">
        <Box className={`flex justify-center items-center w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl`} sx={{backgroundImage:`url(${"/images/reset.jpg"})`}}/>
        <Box className={`grid justify-stretch items-start gap-4 h-full`}>
          <Logo/>
          <Box className={`flex justify-center items-center`}>
            <Typography variant="h1" className={`text-primary font-[700]`}>تغير كلمة السر</Typography>
          </Box>
          <Forms type={"resetPassword"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default ResetPassword