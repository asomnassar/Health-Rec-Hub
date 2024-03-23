import { Box, Skeleton } from "@mui/material"

const LoadingDataBox = () => {
  return (
    <Box className={`flex justify-start items-center flex-wrap gap-1 `}>
      <Skeleton variant="text" className={`w-[40%]`} />
      <Skeleton variant="text" className={`w-[40%]`} />
    </Box>
  )
}

export default LoadingDataBox