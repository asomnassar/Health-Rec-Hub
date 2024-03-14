import { TableBody } from "@mui/material";
import Row from "./Row";

const PatientsTableBody = ({data}:{data:[] | null}) => {
  return (
    <TableBody>
    {data && data.map((row,i) => (
      <Row key={i}  row={row} />
    ))}
  </TableBody>
  )
}

export default PatientsTableBody