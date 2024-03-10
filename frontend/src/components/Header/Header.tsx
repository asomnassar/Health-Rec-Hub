import { AppBar, Box } from '@mui/material'
import { PrimaryButton } from '../../mui/PrimaryButton'
import { PrimaryContainer } from '../../mui/PrimaryContiner'
import Logo from '../Logo/Logo'
import UserBox from './UserBox'

const Header = () => {
  return (
    <AppBar className={`!bg-white h-[80px]`}>
      <PrimaryContainer className='text-dark !flex justify-between items-center '>
        <Logo/>
        <Box className={`flex justify-end items-center gap-4`}>
          <UserBox/>
          <PrimaryButton>تسجيل خروج</PrimaryButton>
        </Box>
      </PrimaryContainer>
    </AppBar>
  )
}

export default Header