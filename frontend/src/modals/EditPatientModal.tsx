import { Box, Modal } from "@mui/material"
import { useContext } from "react"
import { FormsContext } from "../context/FormsContext"
import Forms from "../forms/Forms"

const EditPatientModal = () => {
  const {openEditPatientModal,handleCloseEditPatientModal} = useContext(FormsContext)
  return (
    <Modal
      open={openEditPatientModal}
      onClose={handleCloseEditPatientModal}
    >
      <Box className={`bg-white absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[90vw] max-h-[90vh]  rounded-lg overflow-auto`}>
        <Forms type={"editPatient"} />
      </Box>
    </Modal>
  )
}

export default EditPatientModal