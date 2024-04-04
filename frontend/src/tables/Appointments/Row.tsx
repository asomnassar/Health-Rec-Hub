import {
  DeleteRounded,
  EditRounded,
  RemoveRedEyeRounded,
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
import { getAppointments } from "../../store/appointmentsSlice";
import { getPatient } from "../../store/patientSlice";
import { AppDispatch, RootState } from "../../store/store";
import { AppointmentTypes, PatientTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const Row = ({ row }: { row: AppointmentTypes }) => {
  const { token, type } = useSelector((state: RootState) => state.auth);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const xsScreen = useMediaQuery("(max-width:540px)");
  const [loadingDeleted, setLoadingDeleted] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { handleOpenEditAppointmentModal, setEditableAppointmentData } =
    useContext(FormsContext);

  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  const handleUpdate = async () => {
    handleOpenEditAppointmentModal();
    setEditableAppointmentData(row);
  };

  const handleDelete = async () => {
    setLoadingDeleted(true);
    await server
      .delete(`/appointment/${row._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        handleAlert({ msg: res.data.message, status: "success" });
        if (id) {
          dispatch(getPatient({ id }));
        } else {
          dispatch(getAppointments({ page: 1 }));
        }
      })
      .catch((err) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoadingDeleted(false);
  };

  const handleView = () => {};

  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1">
          {(row.patient as PatientTypes).username}
        </Typography>
      </StyledTableCell>
      {!smScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{handleDate(row.date)}</Typography>
        </StyledTableCell>
      )}
      {!xsScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{row.time}</Typography>
        </StyledTableCell>
      )}
      {!mdScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{row.notes}</Typography>
        </StyledTableCell>
      )}
      <StyledTableCell align="right">
        <Typography
          variant="subtitle1"
          className={`${
            row.status !== "waiting" ? "text-red-500" : "text-green-500"
          } font-[700]`}
        >
          {row.status === "waiting" ? "في الانتظار" : "انتهى"}
        </Typography>
      </StyledTableCell>
      {type === "systemManager" && (
        <StyledTableCell align="right">
          <Box
            className={`flex justify-end items-center flex-wrap gap-6 md:gap-4 sm:!gap-2`}
          >
            {mdScreen && (
              <Tooltip title={"المزيد"}>
                <ActiveIconButton onClick={handleView}>
                  <RemoveRedEyeRounded />
                </ActiveIconButton>
              </Tooltip>
            )}
            <Tooltip title={"تعديل"}>
              <ActiveIconButton
                loadingPosition={"center"}
                loadingIndicator={loadingIcon}
                onClick={handleUpdate}
              >
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
