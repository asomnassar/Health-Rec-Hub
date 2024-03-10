import { Avatar, Box, Typography } from "@mui/material"

const UserBox = () => {
  return (
    <Box className={`flex justify-start items-center gap-2`}>
      <Avatar alt={"avatar"} src={""} />
      <Typography variant="h6">{}</Typography>
    </Box>
  )
}

export default UserBox