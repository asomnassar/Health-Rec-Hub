import { Box, Typography } from "@mui/material"
import { DataBoxOfProfileTypes } from "../../types/components.types"

const DataBox = ({title,value}:DataBoxOfProfileTypes) => {
  return (
    <Box className={`flex justify-start items-center flex-wrap gap-1 `}>
      <Typography variant="h6" className={`font-[600]`}>{title}</Typography>
      <Typography variant="h6">{value}</Typography>
    </Box>
  )
}

export default DataBox