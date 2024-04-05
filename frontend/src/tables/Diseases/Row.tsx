import { DeleteRounded, EditRounded } from "@mui/icons-material";
import { Box, CircularProgress, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FormsContext } from "../../context/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { BlockedIconButton } from "../../mui/BlockedIconButton";
import { getPatient } from "../../store/patientSlice";
import { AppDispatch, RootState } from "../../store/store";
import { CatchErrorTypes } from "../../types/forms.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";
const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});
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
    handleOpenEditDiseaseModal,
    setDiseaseIndex,
    setEditableMedicalRecordData,
  } = useContext(FormsContext);
  const { medicalRecord } = useSelector((state: RootState) => state.patient);

  const handleEdit = async () => {
    setDiseaseIndex(index);
    handleOpenEditDiseaseModal();
    setEditableMedicalRecordData(medicalRecord);
  };

  const [loadingDeleted, setLoadingDeleted] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);
  const { id } = useParams();

  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  const handleDelete = async () => {
    if (!medicalRecord) {
      return "";
    }
    const d = [...medicalRecord.diseases];
    d.splice(index, 1);
    setLoadingDeleted(true);
    await server
      .put(
        `/medicalRecord/${medicalRecord._id}`,
        { diseases: d },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        const { message } = res.data;
        handleAlert({ msg: message, status: "success" });
        dispatch(getPatient({ id }));
      })
      .catch((err: CatchErrorTypes) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoadingDeleted(false);
  };

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
              <BlockedIconButton
                loadingPosition={"center"}
                loading={loadingDeleted}
                loadingIndicator={loadingIcon}
                onClick={handleDelete}
              >
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
