import { Paper } from "@mui/material"
import LoadingDataBox from "./LoadingDataBox"

const LoadingProfileDataBox = () => {
  return (
    <Paper className={`grid grid-cols-2 justify-stretch items-center gap-4 rounded-lg p-4`} elevation={0}>
      <LoadingDataBox />
      <LoadingDataBox />
      <LoadingDataBox />
      <LoadingDataBox />
      <LoadingDataBox />
      <LoadingDataBox />
      <LoadingDataBox />
      <LoadingDataBox />
      <LoadingDataBox />
    </Paper>
  )
}

export default LoadingProfileDataBox