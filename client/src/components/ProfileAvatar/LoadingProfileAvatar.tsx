import { Paper, Skeleton } from "@mui/material";


const LoadingProfileAvatar = () => {
  return (
    <Paper className={`!grid justify-center items-center gap-2 bg-white p-4`} elevation={0}>
      <Skeleton variant="rounded" className="!w-[260px] !h-[260px] flex justify-center items-center m-auto !rounded-full"/>
      <Skeleton variant="text" />
    </Paper>
  )
}

export default LoadingProfileAvatar