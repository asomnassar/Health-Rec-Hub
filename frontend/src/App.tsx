import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import DoctorTabs from "./tabs/DoctorTabs/DoctorTabs"
import PatientTabs from "./tabs/PatientTabs/PatientTabs"
import SystemManagerTabs from "./tabs/SystemManagerTabs/SystemManagerTabs"
import TechAdminTabs from "./tabs/TechAdminTabs/TechAdminTabs"

function App() {
  const [userType,setUserType] = useState("patient")
  const {pathname} = useLocation()
  const {id} = useParams()

  const userTabs = (userType === "patient" ? 
  <PatientTabs/> : userType === "doctor" ? <DoctorTabs/> : userType === "technicalAdministrator" ? <TechAdminTabs/> : <SystemManagerTabs/>)

  const authPaths = ["/login",`/reset-password/${id}`]

  
  useEffect(()=>{
    setUserType("technicalAdministrator")
  },[])

  return authPaths.includes(pathname) ? (
    <Box component={"main"} className="!h-[100vh] !w-[100vw] bg-primary-bg font-ubuntu">
      <Outlet/>
    </Box>
  ):(
    <Box component={"main"} className="!h-[100vh] !w-[100vw] bg-primary-bg pt-[80px] md:pt-[70px] sm:pt-[60px] font-ubuntu grid justify-stretch items-center content-between">
      <Header/>
      {userTabs}
      <Outlet/>
      <Footer/>
    </Box>
  )
}

export default App
