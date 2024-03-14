import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Forms from "../forms/Forms"
import { PrimaryContainer } from "../mui/PrimaryContiner"
import { getActivePatients } from "../store/activePatientsSlice"
import { AppDispatch, RootState } from "../store/store"
import PatientsTable from "../tables/Patients/PatientsTable"

const ActivePatients = () => {
  const dispatch = useDispatch<AppDispatch>()
  const {activePatients , isLoading} = useSelector((state:RootState)=>state.activePatients)

  useEffect(()=>{
    dispatch(getActivePatients({page:1}))
  },[dispatch])

  return !isLoading && activePatients && (
    <PrimaryContainer className="!grid justify-stretch items-center gap-4">
      <Forms type={"searchForActivePatients"} />
      <PatientsTable data={activePatients}/>
    </PrimaryContainer>
  )
}

export default ActivePatients