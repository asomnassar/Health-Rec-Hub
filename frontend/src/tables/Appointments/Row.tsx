import { CheckRounded, DeleteRounded } from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { handleAlert } from "../../functions/handleAlert";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { BlockedIconButton } from "../../mui/BlockedIconButton";
import { RootState } from "../../store/store";
import { AppointmentsTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const Row = ({ row }: { row: AppointmentsTypes }) => {
  const { token, type } = useSelector((state: RootState) => state.auth);
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const xsScreen = useMediaQuery("(max-width:540px)");
  const [loadingActivate, setLoadingActivate] = useState(false);
  const [loadingBlocked, setLoadingBlocked] = useState(false);

  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  const handleUpdate = async () => {
    setLoadingActivate(true);
    await server
      .patch(
        `/patient/activatePatient/${row._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        handleAlert({ msg: res.data.message, status: "success" });
      })
      .catch((err) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoadingActivate(false);
  };

  const handleDelete = async () => {
    setLoadingBlocked(true);
    await server
      .patch(
        `/patient/blockPatient/${row._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        handleAlert({ msg: res.data.message, status: "success" });
      })
      .catch((err) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoadingBlocked(false);
  };

  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1">{row.patient}</Typography>
      </StyledTableCell>
      {!xsScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{row.date}</Typography>
        </StyledTableCell>
      )}
      {!smScreen && (
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
        <Typography variant="subtitle1">{row.status}</Typography>
      </StyledTableCell>
      {type === "technicalAdministrator" && (
        <StyledTableCell align="right">
          <Box className={`flex justify-end items-center flex-wrap gap-6`}>
            <Tooltip title={"تفعيل"}>
              <ActiveIconButton
                loadingPosition={"center"}
                loading={loadingActivate}
                loadingIndicator={loadingIcon}
                onClick={handleUpdate}
              >
                <CheckRounded />
              </ActiveIconButton>
            </Tooltip>
            <Tooltip title={"حذف"}>
              <BlockedIconButton
                loadingPosition={"center"}
                loading={loadingBlocked}
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
