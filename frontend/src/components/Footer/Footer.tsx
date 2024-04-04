import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component={"footer"}
      className="flex justify-center items-center  bg-white h-[80px] md:h-[70px] sm:h-[60px]"
    >
      <Typography variant="subtitle1" className="font-[600] text-center">
        Made With Love By Health Record Hub Team © 2024
      </Typography>
    </Box>
  );
};

export default Footer;
