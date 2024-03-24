import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NoData = () => {
  return (
    <Box className={`grid justify-center items-center gap-2 p-4`}>
      <Box className={`w-[300px]`}>
        <LazyLoadImage src={"/images/no_data.png"} alt={"No Data"} />
      </Box>
      <Typography variant="h6" className={`text-center font-[700]`}>
        لا يوجد بيانات
      </Typography>
    </Box>
  );
};

export default NoData;
