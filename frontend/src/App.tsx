import { Box } from "@mui/material"
import Cookies from "js-cookie"
import { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import ForgotPasswordModal from "./modals/ForgotPasswordModal"
import { getAuth } from "./store/authSlice"
import { getProfile } from "./store/profileSlice"
import { AppDispatch } from "./store/store"

function App() {
  const {pathname} = useLocation()
  const {id} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  // const userTabs = (userType === "patient" ? 
  // <PatientTabs/> : userType === "doctor" ? <DoctorTabs/> : userType === "technicalAdministrator" ? <TechAdminTabs/> : <SystemManagerTabs/>)

  const authPaths = [`${import.meta.env.VITE_LOGIN_ROUTE}`,`${import.meta.env.VITE_RESET_PASSWORD_ROUTE}/${id}`]

  useEffect(()=>{
    try {
      const token = Cookies.get(`${import.meta.env.VITE_TOKEN_NAME}`);
      if(!token && !authPaths.includes(pathname)){
        navigate(`${import.meta.env.VITE_LOGIN_ROUTE}`)
      }else{
        dispatch(getAuth())
        dispatch(getProfile())
      }
    } catch (error) {
      console.log(error);
    }
  },[authPaths, dispatch, navigate, pathname])

  return authPaths.includes(pathname) ? (
    <Box component={"main"} className="!h-[100vh] !w-[100vw] bg-primary-bg font-ubuntu">
      <ForgotPasswordModal/>
      <Toaster/>
      <Outlet/>
    </Box>
  ):(
    <Box component={"main"} className="!min-h-[100vh] !min-w-[100vw] bg-primary-bg pt-[80px] md:pt-[70px] sm:pt-[60px] font-ubuntu grid justify-stretch items-center content-between !overflow-x-hidden">
      <Header/>
      <Navbar/>
      <Outlet/>
      <Toaster/>
      <Footer/>
    </Box>
  )
}

export default App
