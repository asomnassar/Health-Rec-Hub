import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Box, Tooltip, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { FormsContext } from "../../context/FormsContext";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { BlockedIconButton } from "../../mui/BlockedIconButton";
import { RootState } from "../../store/store";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const Row = ({
  row,
  index,
  view,
}: {
  row: string;
  index: number;
  view?: boolean;
}) => {
  const {
    handleOpenEditSurgeryModal,
    setSurgeryIndex,
    setEditableMedicalRecordData,
  } = useContext(FormsContext);
  const { medicalRecord } = useSelector((state: RootState) => state.patient);

  const handleEdit = async () => {
    setSurgeryIndex(index);
    handleOpenEditSurgeryModal();
    setEditableMedicalRecordData(medicalRecord);
  };

  const handleDelete = async () => {};

  return (
    <StyledTableRow className={`cursor-pointer`}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1">{row}</Typography>
      </StyledTableCell>

      {!view && (
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
      )}
    </StyledTableRow>
  );
};

export default Row;
