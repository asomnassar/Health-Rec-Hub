interface PatientTableRowTypes {
  _id: string;
  username: string;
  email: string;
  phone: string;
  address: string;
}

interface AppointmentTableRowTypes {
  _id: string;
  patient: string;
  date: string;
  time: string;
  notes: string;
  status: string;
}
export type { AppointmentTableRowTypes, PatientTableRowTypes };
