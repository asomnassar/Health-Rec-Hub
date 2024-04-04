import { Box, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Logo = () => {
  return (
    <Box className={`flex justify-center items-end gap-2 w-fit`}>
      <Box
        className={`w-[70px] h-[70px] flex justify-center items-center rounded-xl overflow-hidden md:w-[60px] md:h-[60px] sm:!w-[50px] sm:!h-[50px]`}
      >
        <LazyLoadImage alt={"logo"} src={"/images/icon.png"} />
      </Box>
      <Box className={`grid justify-center items-center sm:hidden`}>
        <Typography variant="h5" className="font-[700]">
          Health
        </Typography>
        <Typography className="text-primary font-[500]" variant="subtitle2">
          Record Hub
        </Typography>
      </Box>
    </Box>
  );
};

export default Logo;
