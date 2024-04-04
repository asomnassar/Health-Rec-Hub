import { Box, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { FaFilePdf } from "react-icons/fa6";
import { handleDate } from "../../functions/handleDate";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { TestResultTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const Row = ({ row }: { row: TestResultTypes }) => {
  const mdScreen = useMediaQuery("(max-width:992px)");

  const handleViewPDF = () => {
    window.open(row.pdf, "_blank");
  };

  return (
    <StyledTableRow
      key={row._id}
      className={`cursor-pointer group hover:!bg-dark-gray`}
    >
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1" className={`group-hover:underline`}>
          {row.patient.username}
        </Typography>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Typography variant="subtitle1">{row.type}</Typography>
      </StyledTableCell>
      {!mdScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">
            {handleDate(row.updatedAt)}
          </Typography>
        </StyledTableCell>
      )}
      <StyledTableCell align="right">
        <Box className={`flex justify-end items-center flex-wrap gap-6`}>
          <Tooltip title={"الملف"}>
            <ActiveIconButton onClick={handleViewPDF}>
              <FaFilePdf />
            </ActiveIconButton>
          </Tooltip>
        </Box>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default Row;
