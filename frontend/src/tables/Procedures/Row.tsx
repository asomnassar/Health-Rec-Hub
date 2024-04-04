import { DeleteRounded, EditRounded } from "@mui/icons-material";
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
import { getProcedures } from "../../store/proceduresSlice";
import { AppDispatch, RootState } from "../../store/store";
import { ProcedureTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const Row = ({ row }: { row: ProcedureTypes }) => {
  const smScreen = useMediaQuery("(max-width:768px)");
  const { handleOpenEditProcedureModal, setEditableProcedureData } =
    useContext(FormsContext);
  const [loadingDeleted, setLoadingDeleted] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { token } = useSelector((state: RootState) => state.auth);

  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  const handleEdit = () => {
    handleOpenEditProcedureModal();
    setEditableProcedureData(row);
  };

  const handleDelete = async () => {
    setLoadingDeleted(true);
    await server
      .delete(`/procedure/${row._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        handleAlert({ msg: res.data.message, status: "success" });
        if (id) {
          dispatch(getPatient({ id }));
        } else {
          dispatch(getProcedures({ page: 1 }));
        }
      })
      .catch((err) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoadingDeleted(false);
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
        <Typography variant="subtitle1">{row.details}</Typography>
      </StyledTableCell>
      {!smScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">
            {handleDate(row.updatedAt)}
          </Typography>
        </StyledTableCell>
      )}
      <StyledTableCell align="right">
        <Box
          className={`flex justify-end items-center gap-4 md:gap-3 sm:!gap-2`}
        >
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
    </StyledTableRow>
  );
};

export default Row;
