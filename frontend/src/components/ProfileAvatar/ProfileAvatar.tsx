import { Box, Paper, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { propsTypes } from "../../types/components.types";


const ProfileAvatar = ({avatar,username}:propsTypes) => {
  return (
    <Paper className={`!grid justify-center items-center gap-2 bg-white p-4`} elevation={0}>
      <Box className="!w-[260px] !h-[260px] flex justify-center items-center m-auto">
        <LazyLoadImage alt={"avatar"} src={avatar} width={"100%"} height={"100%"} />
      </Box>
      <Typography variant="h5" className={`text-center font-[600]`}>{username}</Typography>
    </Paper>
  )
}

export default ProfileAvatar