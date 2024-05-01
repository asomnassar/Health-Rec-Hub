import {
  BlockRounded,
  CheckRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import {
  Box,
  CircularProgress,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { handleAlert } from "../../functions/handleAlert";
import { ActiveIconButton } from "../../mui/ActiveIconButton";
import { BlockedIconButton } from "../../mui/BlockedIconButton";
import { getActivePatients } from "../../store/activePatientsSlice";
import { getBlockedPatients } from "../../store/blockedPatientsSlice";
import { getPendingPatients } from "../../store/pendingPatientsSlice";
import { AppDispatch, RootState } from "../../store/store";
import { PatientTypes } from "../../types/store.types";
import { StyledTableRow } from "../StyledTableRow";
import { StyledTableCell } from "./StyledTableCell";

const server = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}`,
});

const Row = ({ row }: { row: PatientTypes }) => {
  const { pathname } = useLocation();
  const { token, type } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const mdScreen = useMediaQuery("(max-width:992px)");
  const smScreen = useMediaQuery("(max-width:768px)");
  const xsScreen = useMediaQuery("(max-width:540px)");
  const [patientsType, setPatientsType] = useState("active");
  const [loadingActivate, setLoadingActivate] = useState(false);
  const [loadingBlocked, setLoadingBlocked] = useState(false);
  const navigate = useNavigate();

  const loadingIcon = (
    <CircularProgress sx={{ color: (theme) => theme.palette.common.white }} />
  );

  const handleActivatePatient = async () => {
    setLoadingActivate(true);
    await server
      .patch(
        `/patient/activatePatient/${row.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (patientsType === "active") {
          dispatch(getActivePatients({ page: 1 }));
        } else if (patientsType === "blocked") {
          dispatch(getBlockedPatients({ page: 1 }));
        } else if (patientsType === "pending") {
          dispatch(getPendingPatients({ page: 1 }));
        }
        handleAlert({ msg: res.data.message, status: "success" });
      })
      .catch((err) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoadingActivate(false);
  };

  const handleBlockPatient = async () => {
    setLoadingBlocked(true);
    await server
      .patch(
        `/patient/blockPatient/${row.id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        if (patientsType === "active") {
          dispatch(getActivePatients({ page: 1 }));
        } else if (patientsType === "blocked") {
          dispatch(getBlockedPatients({ page: 1 }));
        } else if (patientsType === "pending") {
          dispatch(getPendingPatients({ page: 1 }));
        }
        handleAlert({ msg: res.data.message, status: "success" });
      })
      .catch((err) => {
        handleAlert({ msg: err.response.data.message, status: "error" });
      });
    setLoadingBlocked(false);
  };

  const handleViewPatient = () => {
    navigate(`${import.meta.env.VITE_PATIENT_ROUTE}/${row.id}`);
  };

  useEffect(() => {
    if (pathname === `${import.meta.env.VITE_ACTIVE_PATIENTS_ROUTE}`) {
      setPatientsType("active");
    } else if (pathname === `${import.meta.env.VITE_PENDING_PATIENTS_ROUTE}`) {
      setPatientsType("pending");
    } else if (pathname === `${import.meta.env.VITE_BLOCKED_PATIENTS_ROUTE}`) {
      setPatientsType("blocked");
    }
  }, [pathname]);

  return (
    <StyledTableRow
      key={row.id}
      className={`cursor-pointer group hover:!bg-dark-gray`}
      onClick={handleViewPatient}
    >
      <StyledTableCell scope="row" align="right">
        <Typography variant="subtitle1" className={`group-hover:underline`}>
          {row.username}
        </Typography>
      </StyledTableCell>
      {!smScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{row.email}</Typography>
        </StyledTableCell>
      )}
      {!xsScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{row.phone}</Typography>
        </StyledTableCell>
      )}
      {!mdScreen && (
        <StyledTableCell align="right">
          <Typography variant="subtitle1">{row.address}</Typography>
        </StyledTableCell>
      )}
      {type === "technicalAdministrator" ? (
        <StyledTableCell align="right">
          <Box className={`flex justify-end items-center flex-wrap gap-6`}>
            {patientsType !== "active" && (
              <Tooltip title={"تفعيل"}>
                <ActiveIconButton
                  loadingPosition={"center"}
                  loading={loadingActivate}
                  loadingIndicator={loadingIcon}
                  onClick={handleActivatePatient}
                >
                  <CheckRounded />
                </ActiveIconButton>
              </Tooltip>
            )}
            {patientsType !== "blocked" && (
              <Tooltip title={"حذر"}>
                <BlockedIconButton
                  loadingPosition={"center"}
                  loading={loadingBlocked}
                  loadingIndicator={loadingIcon}
                  onClick={handleBlockPatient}
                >
                  <BlockRounded />
                </BlockedIconButton>
              </Tooltip>
            )}
          </Box>
        </StyledTableCell>
      ) : (
        <StyledTableCell align="right">
          <Box className={`flex justify-end items-center flex-wrap gap-6`}>
            <Tooltip title={"المزيد"}>
              <ActiveIconButton onClick={handleViewPatient}>
                <VisibilityRounded />
              </ActiveIconButton>
            </Tooltip>
          </Box>
        </StyledTableCell>
      )}
    </StyledTableRow>
  );
};

export default Row;
