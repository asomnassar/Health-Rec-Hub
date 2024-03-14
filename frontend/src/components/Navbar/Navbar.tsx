import { Box } from "@mui/material"
import { ReactNode, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { PrimaryContainer } from "../../mui/PrimaryContiner"
import { RootState } from "../../store/store"
import NavLink from "./NavLink"

const Navbar = () => {
  const {type} = useSelector((state:RootState)=>state.auth)
  const [navs,setNavs] = useState<ReactNode | null>(null)

  useEffect(()=>{
    if(type === "systemManager"){
      setNavs(<><NavLink title={"الملف الشخصى"} link={`${import.meta.env.VITE_PROFILE_ROUTE}`} />
      <NavLink title={"المرضى النشيطين"} link={`${import.meta.env.VITE_ACTIVE_PATIENTS_ROUTE}`} />
      <NavLink title={"جدول المواعيد"} link={`${import.meta.env.VITE_APPOINTMENTS_TABLE_ROUTE}`} />
      <NavLink title={"اضافة مريض"} link={`${import.meta.env.VITE_ADD_PATIENT_ROUTE}`} /></>)
    }else if(type === "technicalAdministrator"){
      setNavs(<><NavLink title={"الملف الشخصى"} link={`${import.meta.env.VITE_PROFILE_ROUTE}`} />
      <NavLink title={"المرضى النشيطين"} link={`${import.meta.env.VITE_ACTIVE_PATIENTS_ROUTE}`} />
      <NavLink title={"المرضى المنتظرين"} link={`${import.meta.env.VITE_PENDING_PATIENTS_ROUTE}`} />
      <NavLink title={"المرضى المحظورين"} link={`${import.meta.env.VITE_BLOCKED_PATIENTS_ROUTE}`} /></>)
    }
  },[type])

  return (
    <PrimaryContainer>
      <Box className={`flex justify-between items-center gap-4 p-4 px-8 bg-white rounded-xl`}>
        {navs}
      </Box>
    </PrimaryContainer>
  )
}

export default Navbar