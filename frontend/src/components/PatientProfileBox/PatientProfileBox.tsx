import { Box, Paper, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { handleDate } from "../../functions/handleDate";
import { PatientTypes } from "../../types/store.types";
import DataBox from "../ProfileDataBox/DataBox";

const PatientProfileBox = ({ data }: { data: PatientTypes }) => {
  return (
    <Paper className={`grid justify-stretch items-center gap-6 p-4`}>
      <Typography variant="h5" className={`font-[600] text-primary`}>
        ملف المريض الشخصى
      </Typography>
      <Box
        className={`grid justify-stretch items-center gap-8 grid-cols-[1fr,auto]`}
      >
        <Box className={`grid justify-stretch items-center gap-4`}>
          <Box
            className={`w-[260px] h-[260px] flex justify-center items-center rounded-full overflow-hidden`}
          >
            <LazyLoadImage src={data.avatar} alt={"avatar"} />
          </Box>
          <Typography
            variant="h5"
            className={`font-[600] text-center text-primary`}
          >
            {data.username}
          </Typography>
        </Box>
        <Box className={`flex justify-stretch items-center gap-8 flex-wrap`}>
          <DataBox title={"الاسم الاول : "} value={data.firstName} />
          <DataBox title={"الاسم الاخير : "} value={data.lastName} />
          <DataBox title={"البريد الالكنرونى : "} value={data.email} />
          <DataBox title={"رقم الهاتف : "} value={data.phone} />
          <DataBox title={"الجنس : "} value={data.gender} />
          <DataBox title={"العنوان : "} value={data.address} />
          <DataBox
            title={"تاريخ الميلاد : "}
            value={handleDate(data.dateOfBirth)}
          />
          <DataBox title={"العمر : "} value={data.age} />
        </Box>
      </Box>
    </Paper>
  );
};

export default PatientProfileBox;
