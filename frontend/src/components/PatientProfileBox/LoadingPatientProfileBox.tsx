import { Box, Paper, Skeleton } from "@mui/material";
import LoadingDataBox from "./LoadingDataBox";

const LoadingPatientProfileBox = () => {
  return (
    <Paper className={`grid justify-stretch items-center gap-6 p-4 w-full`}>
      <Skeleton variant={"text"} className={`w-[50%]`} />
      <Box
        className={`grid justify-stretch items-center gap-8 grid-cols-[auto,1fr]`}
      >
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Skeleton
            variant="circular"
            className={`!w-[260px] !h-[260px] flex justify-center items-center rounded-full overflow-hidden`}
          />
          <Skeleton variant={"text"} />
        </Box>
        <Box className={`flex justify-stretch items-center gap-8 flex-wrap`}>
          <LoadingDataBox />
          <LoadingDataBox />
          <LoadingDataBox />
          <LoadingDataBox />
          <LoadingDataBox />
          <LoadingDataBox />
          <LoadingDataBox />
          <LoadingDataBox />
          <LoadingDataBox />
        </Box>
      </Box>
    </Paper>
  );
};

export default LoadingPatientProfileBox;
