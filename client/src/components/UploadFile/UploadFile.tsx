import { Box, Typography } from "@mui/material";
import { ChangeEvent, useContext } from "react";
import { FormsContext } from "../../context/FormsContext";

const UploadFile = () => {
  const { testResultFile, setTestResultFile } = useContext(FormsContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTestResultFile(e.target.files?.["0"] || "");
  };

  return (
    <Box
      component={"label"}
      htmlFor="pdf"
      className={`flex justify-center items-center cursor-pointer border-dashed border-primary border-2 p-3 hover:!bg-primary hover:text-white rounded-lg`}
    >
      <Typography variant="h6" className={`font-[600]`}>
        {!testResultFile ? "ارفع ملف" : (testResultFile as File).name}
      </Typography>
      <input
        type={"file"}
        id={"pdf"}
        name={"pdf"}
        accept=".pdf"
        title="Upload PDF File"
        placeholder=""
        className="hidden"
        onChange={handleChange}
      />
    </Box>
  );
};

export default UploadFile;
