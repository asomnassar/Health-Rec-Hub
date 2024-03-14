import { Avatar, Box, Typography } from "@mui/material"
import { ProfileTypes } from "../../types/store.types"

const UserBox = ({data}:{data:ProfileTypes}) => {
  return (
    <Box className={`flex justify-start items-center gap-2`}>
      <Avatar alt={"avatar"} src={data.avatar} />
      <Typography variant="h6">{`${data.firstName} ${data.lastName}`}</Typography>
    </Box>
  )
}

export default UserBox