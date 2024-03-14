import { LogoutRounded } from '@mui/icons-material'
import { AppBar, Box, useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleAlert } from '../../functions/handleAlert'
import { PrimaryButton } from '../../mui/PrimaryButton'
import { PrimaryContainer } from '../../mui/PrimaryContiner'
import { resetAuth } from '../../store/authSlice'
import { RootState } from '../../store/store'
import Logo from '../Logo/Logo'
import UserBox from './UserBox'

const Header = () => {
  const smScreen = useMediaQuery("(max-width:768px)")
  const {profile} = useSelector((state:RootState)=>state.profile)

  const dispatch=useDispatch()

  const handleLogout=()=>{
    dispatch(resetAuth())
    handleAlert({msg:"تم تسجيل الخروج بنجاح",status:"success"})
  }

  return (
    <AppBar className={`!bg-white h-[80px]`}>
      <PrimaryContainer className='text-dark !flex justify-between items-center '>
        <Logo/>
        <Box className={`flex justify-end items-center gap-4`}>
          {profile && <UserBox data={profile} />}
          <Link to={`${import.meta.env.VITE_LOGIN_ROUTE}`}>
            <PrimaryButton onClick={handleLogout}>
              {smScreen ? <LogoutRounded/> : "تسجيل خروج"}
            </PrimaryButton>
          </Link>
        </Box>
      </PrimaryContainer>
    </AppBar>
  )
}

export default Header