import {
  DeleteRounded,
  EditRounded,
  FileOpenRounded,
} from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FormsContext } from "../../context/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { handleDate } from "../../functions/handleDate";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { BlockedIconButton } from "../../mui/BlockedIconButton";
import { getPatient } from "../../store/patientSlice";
import { AppDispatch, RootState } from "../../store/store";
import { getTestResults } from "../../store/testResultsSlice";
import { TestResultTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const Row = ({ row }: { row: TestResultTypes }) => {
  const mdScreen = useMediaQuery("(max-width:992px)");
  const [loadingDeleted, setLoadingDeleted] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { token } = useSelector((state: RootState) => state.auth);
  const {
    handleOpenEditTestResultModal,
    setEditableTestResultData,
    setTestResultFile,
  } = useContext(FormsContext);

  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  const handleViewPDF = () => {
    window.open(row.pdf, "_blank");
  };

  const handleEdit = () => {
    handleOpenEditTestResultModal();
    setTestResultFile(row.pdf);
    setEditableTestResultData(row);
  };

  const handleDelete = async () => {
    setLoadingDeleted(true);
    await server
      .delete(`/testResult/${row.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        handleAlert({ msg: res.data.message, status: "success" });
        if (id) {
          dispatch(getPatient({ id }));
        } else {
          dispatch(getTestResults({ page: 1 }));
        }
      })
      .catch((err) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoadingDeleted(false);
  };

  return (
    <StyledTableRow key={row.id}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1">{row.patient.username}</Typography>
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
              <FileOpenRounded />
            </ActiveIconButton>
          </Tooltip>
          <Tooltip title={"المزيد"}>
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
    </StyledTableRow>
  );
};

export default Row;
