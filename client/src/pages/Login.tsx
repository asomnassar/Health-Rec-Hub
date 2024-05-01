import { Box, Typography } from "@mui/material";
import Logo from "../components/Logo/Logo";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";

const Login = () => {
  return (
    <PrimaryBox className={`h-full`}>
      <PrimaryContainer className="h-full w-full !grid grid-cols-2 justify-stretch items-center gap-6 md:grid-cols-1 md:gap-4 sm:!gap-2">
        <Box
          className={`flex justify-center items-center w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover rounded-xl md:hidden`}
          sx={{ backgroundImage: `url(${"/images/login.jpg"})` }}
        />
        <Box
          className={`grid justify-stretch items-start gap-4 h-full md:gap-3 sm:!gap-2`}
        >
          <Logo />
          <Box className={`flex justify-center items-center`}>
            <Typography variant="h1" className={`text-primary font-[700]`}>
              تسجيل الدخول
            </Typography>
          </Box>
          <Forms type={"login"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Login;
