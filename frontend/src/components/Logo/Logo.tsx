import { Box, Typography } from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Logo = () => {
  return (
    <Box className={`flex justify-center items-end gap-2 w-fit`}>
      <Box className={`w-[70px] h-[70px] flex justify-center items-center rounded-xl overflow-hidden`}>
        <LazyLoadImage alt={'logo'} src={"./images/icon.png"} />
      </Box>
      <Box className={`grid justify-start items-center`}>
        <Typography variant="h5" className="font-[700]">Health</Typography>
        <Typography className="text-primary font-[500]" variant="subtitle2">Medical Hub</Typography>
      </Box>
    </Box>
  )
}

export default Logo