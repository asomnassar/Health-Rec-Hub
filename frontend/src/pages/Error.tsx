import { Box } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";

const Error = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`flex justify-center items-center`}>
        <Box
          className={`flex justify-center items-center rounded-xl overflow-hidden w-[400px] m-auto`}
        >
          <LazyLoadImage src={"/images/error.jpg"} alt={"erorr"} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Error;
