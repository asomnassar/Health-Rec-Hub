import PrimaryTable from "../PrimaryTable"
import PatientsTableBody from "./PatientsTableBody"
import TableHeader from "./TableHeader"

const PatientsTable = ({data}) => {
  return (
    <PrimaryTable>
      <TableHeader/>
      <PatientsTableBody data={data} />
    </PrimaryTable>
  )
}

export default PatientsTable