import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FormsContext } from "../../context/FormsContext";

const defaultImage = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png";

const UploadImage = ({ title }: { title?: string }) => {
  const { uploadImage, setUploadImage } = useContext(FormsContext);

  const handleChange = (e: { target: { files: FileList | null } }) => {
    if (e && e.target && e.target.files) {
      setUploadImage(e.target.files[0]);
    }
  };

  return (
    <Box
      component={"label"}
      htmlFor={"image"}
      className={
        "bg-white p-4 rounded-xl cursor-pointer w-fit grid justify-center items-center gap-4 m-auto"
      }
    >
      <Typography variant="h6" className={`font-[600] text-center`}>
        {title || "صورة المريض"}
      </Typography>
      <Box
        className={`relative flex justify-center items-center rounded-full w-[200px] h-[200px] overflow-hidden`}
      >
        <LazyLoadImage
          alt={"avatar"}
          src={
            uploadImage
              ? uploadImage instanceof File
                ? URL.createObjectURL(uploadImage)
                : uploadImage
              : defaultImage
          }
          width={"100%"}
          height={"100%"}
        />
        <Box
          className={
            "bg-black rounded-full opacity-0 w-full h-full absolute transition-all  hover:opacity-50"
          }
        />
      </Box>
      <input
        type={"file"}
        placeholder={""}
        id={"image"}
        className={`opacity-0 -z-10 absolute`}
        onChange={handleChange}
      />
    </Box>
  );
};

export default UploadImage;
