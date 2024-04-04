import { DeleteRounded, VisibilityRounded } from "@mui/icons-material";
import { Box, CircularProgress, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { FormsContext } from "../../context/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleDate } from "../../functions/handleDate";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { BlockedIconButton } from "../../mui/BlockedIconButton";
import { getPatient } from "../../store/patientSlice";
import { getPrescriptions } from "../../store/prescriptionsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { PrescriptionTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const Row = ({ row }: { row: PrescriptionTypes }) => {
  const { handleOpenViewPrescriptionModal } = useContext(AppContext);
  const { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const { setMedications } = useContext(FormsContext);
  const [loadingDeleted, setLoadingDeleted] = useState(false);
  const { id } = useParams();

  const handleViewPrescription = () => {
    handleOpenViewPrescriptionModal();
    setMedications(row.medications);
  };

  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  const handleDeletePrescription = async () => {
    setLoadingDeleted(true);
    await server
      .delete(`/prescription/${row._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        handleAlert({ msg: res.data.message, status: "success" });
        if (id) {
          dispatch(getPatient({ id }));
        } else {
          dispatch(getPrescriptions({ page: 1 }));
        }
      })
      .catch((err) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoadingDeleted(false);
  };

  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1">{row.patient.username}</Typography>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Typography variant="subtitle1">{handleDate(row.updatedAt)}</Typography>
      </StyledTableCell>
      <StyledTableCell align="right">
        <Box className={`flex justify-end items-center flex-wrap gap-6`}>
          <Tooltip title={"المزيد"}>
            <ActiveIconButton onClick={handleViewPrescription}>
              <VisibilityRounded />
            </ActiveIconButton>
          </Tooltip>
          <Tooltip title={"حذف"}>
            <BlockedIconButton
              loadingPosition={"center"}
              loading={loadingDeleted}
              loadingIndicator={loadingIcon}
              onClick={handleDeletePrescription}
            >
              <DeleteRounded />
            </BlockedIconButton>
          </Tooltip>
        </Box>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default Row;
