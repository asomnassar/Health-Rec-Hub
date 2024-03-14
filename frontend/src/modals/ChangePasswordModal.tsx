import { Box, Modal } from "@mui/material"
import { useContext } from "react"
import { FormsContext } from "../context/FormsContext"

const ChangePasswordModal = () => {
  const {openForgotPasswordModal,handleCloseForgotPasswordModal} = useContext(FormsContext)
  return (
    <Modal
      open={openForgotPasswordModal}
      onClose={handleCloseForgotPasswordModal}
    >
      <Box className={`bg-white absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] max-w-[90vw] max-h-[90vh]  rounded-lg overflow-auto`}>
      </Box>
    </Modal>
  )
}

export default ChangePasswordModal