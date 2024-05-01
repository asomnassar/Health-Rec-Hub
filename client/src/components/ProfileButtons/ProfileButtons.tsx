import { EditRounded, LockRounded } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { useContext } from 'react'
import { FormsContext } from '../../context/FormsContext'
import { PrimaryButton } from '../../mui/PrimaryButton'
import { SecondaryButton } from '../../mui/SecondaryButton'

const ProfileButtons = () => {
  const {handleOpenEditProfileModal,handleOpenChangePasswordModal} = useContext(FormsContext)
  

  const handleEditProfile = ()=>{
    handleOpenEditProfileModal()
  }

  const handleChangePassword = ()=>{
    handleOpenChangePasswordModal()
  }

  return (
    <Box className={`flex justify-center items-center gap-4`}>
    <SecondaryButton onClick={handleChangePassword}>
      <LockRounded/>
      <Typography variant={"button"}>تغيير كلمة السر</Typography>
    </SecondaryButton>
    <PrimaryButton onClick={handleEditProfile}>
      <EditRounded/>
      <Typography variant="button">تعديل</Typography>
    </PrimaryButton>
  </Box>
  )
}

export default ProfileButtons