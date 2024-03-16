import { BlockRounded, CheckRounded } from "@mui/icons-material";
import { Box, CircularProgress, TableRow, Tooltip, Typography, styled, useMediaQuery } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { handleAlert } from "../../functions/handleAlert";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { BlockedIconButton } from "../../mui/BlockedIconButton";
import { getActivePatients } from "../../store/activePatientsSlice";
import { getBlockedPatients } from "../../store/blockedPatientsSlice";
import { getPendingPatients } from "../../store/pendingPatientsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { PatientTableRowTypes } from "../../types/tables.types";
import { StyledTableCell } from "./StyledTableCell";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const Row = ({row}:{row:PatientTableRowTypes}) => {
  const {pathname} =  useLocation()
  const {token} = useSelector((state:RootState)=>state.auth)
  const dispatch  = useDispatch<AppDispatch>()
  const mdScreen = useMediaQuery("(max-width:992px)")
  const smScreen = useMediaQuery("(max-width:768px)")
  const xsScreen = useMediaQuery("(max-width:540px)")
  const [patientsType , setPatientsType] = useState("active")
  const [loadingActivate , setLoadingActivate] = useState(false)
  const [loadingBlocked , setLoadingBlocked] = useState(false)
  
  const loadingIcon = (<CircularProgress sx={{ color: (theme) => theme.palette.common.white}} />)

  const handleActivatePatient = async()=>{
    setLoadingActivate(true)
    await server.patch(`/patient/activatePatient/${row._id}`,{},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{
      if(patientsType === "active"){
        dispatch(getActivePatients({page:1}))
      }else if(patientsType === "blocked"){
        dispatch(getBlockedPatients({page:1}))
      }else if(patientsType === "pending"){
        dispatch(getPendingPatients({page:1}))
      }
      handleAlert({msg:res.data.message,status:"success"})
    }).catch((err)=>{
      handleAlert({msg:err.response.data.message,status:"error"})
    })
    setLoadingActivate(false)
  }

  const handleBlockPatient = async()=>{
    setLoadingBlocked(true)
    await server.patch(`/patient/blockPatient/${row._id}`,{},{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((res)=>{
      if(patientsType === "active"){
        dispatch(getActivePatients({page:1}))
      }else if(patientsType === "blocked"){
        dispatch(getBlockedPatients({page:1}))
      }else if(patientsType === "pending"){
        dispatch(getPendingPatients({page:1}))
      }
      handleAlert({msg:res.data.message,status:"success"})
    }).catch((err)=>{
      handleAlert({msg:err.response.data.message,status:"error"})
    })
    setLoadingBlocked(false)
  }

  useEffect(()=>{
    if(pathname === `${import.meta.env.VITE_ACTIVE_PATIENTS_ROUTE}`){
      setPatientsType("active")
    } else if(pathname === `${import.meta.env.VITE_PENDING_PATIENTS_ROUTE}`){
      setPatientsType("pending")
    } else if(pathname === `${import.meta.env.VITE_BLOCKED_PATIENTS_ROUTE}`){
      setPatientsType("blocked")
    } 
  },[pathname])
  
  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1" >{row.username}</Typography>
      </StyledTableCell>
      {!smScreen && <StyledTableCell align="right">
        <Typography variant="subtitle1" >{row.email}</Typography>
      </StyledTableCell>}
      {!xsScreen && <StyledTableCell align="right">
        <Typography variant="subtitle1" >{row.phone}</Typography>
      </StyledTableCell>}
      {!mdScreen && <StyledTableCell align="right">
        <Typography variant="subtitle1" >{row.address}</Typography>
      </StyledTableCell>}
      <StyledTableCell align="right">
        <Box className={`flex justify-end items-center flex-wrap gap-6`}>
          {patientsType !== "active" && <Tooltip title={"تفعيل"}>
            <ActiveIconButton loadingPosition={"center"}
                loading={loadingActivate} loadingIndicator={loadingIcon} onClick={handleActivatePatient}>
              <CheckRounded/>
            </ActiveIconButton>
          </Tooltip>}
          {patientsType !== "blocked" && <Tooltip title={"حذر"}>
            <BlockedIconButton loadingPosition={"center"}
                loading={loadingBlocked} loadingIndicator={loadingIcon} onClick={handleBlockPatient}>
              <BlockRounded/>
            </BlockedIconButton>
          </Tooltip>}
        </Box>
      </StyledTableCell>
    </StyledTableRow>
  )
}

export default Row