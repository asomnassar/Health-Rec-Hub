import { TableBody } from "@mui/material";
import Row from "./Row";

const AllergiesTableBody = ({
  data,
  view,
}: {
  data: string[] | null;
  view?: boolean;
}) => {
  return (
    <TableBody>
      {data &&
        data.map((row, i) => <Row view={view} index={i} key={i} row={row} />)}
    </TableBody>
  );
};

export default AllergiesTableBody;
