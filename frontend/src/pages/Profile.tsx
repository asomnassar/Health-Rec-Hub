import { EditRounded, LockRounded } from "@mui/icons-material"
import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import ProfileAvatar from "../components/ProfileAvatar/ProfileAvatar"
import ProfileDataBox from "../components/ProfileDataBox/ProfileDataBox"
import { PrimaryBox } from "../mui/PrimaryBox"
import { PrimaryButton } from "../mui/PrimaryButton"
import { PrimaryContainer } from "../mui/PrimaryContiner"
import { SecondaryButton } from "../mui/SecondaryButton"
import { RootState } from "../store/store"

const Profile = () => {
  const {profile ,isLoading} = useSelector((state:RootState)=>state.profile)

  const handleEditProfile = ()=>{

  }

  const handleChangePassword = ()=>{
    
  }

  return !isLoading && profile && (
    <PrimaryBox>
      <PrimaryContainer className={`!grid grid-cols-[auto,1fr] justify-stretch items-start gap-8`}>
        <ProfileAvatar avatar={profile.avatar} username={profile.username} />
        <Box className={`grid justify-stretch items-center gap-4`}>
          <ProfileDataBox data={profile}/>
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
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  )
}

export default Profile