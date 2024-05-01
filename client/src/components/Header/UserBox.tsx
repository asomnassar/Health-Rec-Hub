import { Avatar, Box, Typography, useMediaQuery } from "@mui/material";
import { ProfileTypes } from "../../types/store.types";

const UserBox = ({ data }: { data: ProfileTypes }) => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  return (
    <Box className={`flex justify-start items-center gap-2`}>
      <Avatar
        alt={"avatar"}
        src={data.avatar}
        className={`md:!w-[32px] md:!h-[32px]`}
      />
      <Typography variant="h6">
        {mdScreen ? data.firstName : `${data.firstName} ${data.lastName}`}
      </Typography>
    </Box>
  );
};

export default UserBox;
