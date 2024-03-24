import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DataBoxOfProfileTypes } from "../../types/components.types";

const DataBox = ({ title, value, link }: DataBoxOfProfileTypes) => {
  return (
    <Box className={`flex justify-start items-center flex-wrap gap-1 `}>
      <Typography variant="h6" className={`font-[600]`}>
        {title}
      </Typography>
      {link ? (
        <Link to={link}>
          <Typography variant="h6" className={`underline hover:text-primary`}>
            {value}
          </Typography>
        </Link>
      ) : (
        <Typography variant="h6">{value}</Typography>
      )}
    </Box>
  );
};

export default DataBox;
