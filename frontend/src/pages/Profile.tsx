import { Box } from "@mui/material"
import { useSelector } from "react-redux"
import LoadingProfileAvatar from "../components/ProfileAvatar/LoadingProfileAvatar"
import ProfileAvatar from "../components/ProfileAvatar/ProfileAvatar"
import ProfileButtons from "../components/ProfileButtons/ProfileButtons"
import LoadingProfileDataBox from "../components/ProfileDataBox/LoadingProfileDataBox"
import ProfileDataBox from "../components/ProfileDataBox/ProfileDataBox"
import { PrimaryBox } from "../mui/PrimaryBox"
import { PrimaryContainer } from "../mui/PrimaryContiner"
import { RootState } from "../store/store"

const Profile = () => {
  const {profile ,isLoading} = useSelector((state:RootState)=>state.profile)

  return !isLoading && profile ? (
    <PrimaryBox>
      <PrimaryContainer className={`!grid grid-cols-[auto,1fr] justify-stretch items-start gap-8`}>
        <ProfileAvatar avatar={profile.avatar} username={profile.username} />
        <Box className={`grid justify-stretch items-center gap-4`}>
          <ProfileDataBox data={profile}/>
          <ProfileButtons/>
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  ):(
    <PrimaryBox>
    <PrimaryContainer className={`!grid grid-cols-[auto,1fr] justify-stretch items-start gap-8`}>
      <LoadingProfileAvatar/>
      <Box className={`grid justify-stretch items-center gap-4`}>
        <LoadingProfileDataBox/>
      </Box>
    </PrimaryContainer>
  </PrimaryBox>
  )
}

export default Profile