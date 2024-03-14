import { Typography } from "@mui/material"
import Forms from "../forms/Forms"
import { PrimaryBox } from "../mui/PrimaryBox"
import { PrimaryContainer } from "../mui/PrimaryContiner"

const AddPatient = () => {
  return (
    <PrimaryBox>
      <PrimaryContainer className={`!grid justify-stretch items-center gap-8`}>
        <Typography variant="h4" className={`font-[700] text-primary text-center`} >اضف مريض جديد</Typography>
        <Forms type={"addPatient"} />
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default AddPatient