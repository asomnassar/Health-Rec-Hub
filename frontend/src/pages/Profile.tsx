import ProfileAvatar from "../components/ProfileAvatar/ProfileAvatar"
import ProfileDataBox from "../components/ProfileDataBox/ProfileDataBox"
import { PrimaryContainer } from "../mui/PrimaryContiner"

const Profile = () => {
  return (
    <PrimaryContainer>
      <ProfileAvatar/>
      <ProfileDataBox/>
    </PrimaryContainer>
  )
}

export default Profile