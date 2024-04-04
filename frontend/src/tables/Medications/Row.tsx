import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import { useContext } from "react";
import { FormsContext } from "../../context/FormsContext";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { BlockedIconButton } from "../../mui/BlockedIconButton";
import { MedicationTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const Row = ({ row, index }: { row: MedicationTypes; index: number }) => {
  const { setEditMedication, handleDeleteMedication } =
    useContext(FormsContext);

  const handleEdit = async () => {
    setEditMedication({ data: row, index });
  };

  const handleDelete = async () => {
    handleDeleteMedication(index);
  };

  return (
    <StyledTableRow className={`cursor-pointer`}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1">{row.name}</Typography>
      </StyledTableCell>

      <StyledTableCell scope="row" align="left">
        <Typography variant="subtitle1">{row.dosage}</Typography>
      </StyledTableCell>

      <StyledTableCell align="right">
        <Box className={`flex justify-end items-center flex-wrap gap-6`}>
          <Tooltip title={"تعديل"}>
            <ActiveIconButton onClick={handleEdit}>
              <EditRounded />
            </ActiveIconButton>
          </Tooltip>
          <Tooltip title={"حذف"}>
            <BlockedIconButton onClick={handleDelete}>
              <DeleteRounded />
            </BlockedIconButton>
          </Tooltip>
        </Box>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default Row;
