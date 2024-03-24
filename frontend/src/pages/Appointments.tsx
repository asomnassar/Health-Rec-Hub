import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { getAppointments } from "../store/appointmentsSlice";
import { AppDispatch, RootState } from "../store/store";
import AppointmentsTable from "../tables/Appointments/AppointmentsTable";

const Appointments = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { appointments, isLoading } = useSelector(
    (state: RootState) => state.appointments
  );

  useEffect(() => {
    dispatch(getAppointments({ page: 1 }));
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className="!grid justify-stretch items-center gap-4">
        <Forms type={"searchForAppointments"} />
        <AppointmentsTable data={appointments} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Appointments;
