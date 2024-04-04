import { AddRounded, EditRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import { FormsContext } from "../../context/FormsContext";
import { handleAlert } from "../../functions/handleAlert";
import { PrimaryButton } from "../../mui/PrimaryButton";
import { PrimaryTextField } from "../../mui/PrimaryTextField";
import MedicationsTable from "../../tables/Medications/MedicationsTable";

const AddPrescriptionForm = () => {
  const {
    loading,
    medications,
    handleAddMedication,
    setEditMedication,
    editMedication,
    handleEditMedication,
  } = useContext(FormsContext);
  const [name, setName] = useState("");
  const [dosage, setDosage] = useState("");

  const handleChangeMedication = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeDosage = (e: ChangeEvent<HTMLInputElement>) => {
    setDosage(e.target.value);
  };

  const handleAdd = () => {
    if (name && dosage) {
      if (editMedication) {
        handleEditMedication({ name, dosage }, editMedication.index);
        setEditMedication(null);
      } else {
        handleAddMedication({ name, dosage });
      }
      setName("");
      setDosage("");
    } else {
      handleAlert({ msg: "قم بادخال الدواء والجرعة" });
    }
  };

  useEffect(() => {
    if (editMedication) {
      setName(editMedication.data.name);
      setDosage(editMedication.data.dosage);
    } else {
      setName("");
      setDosage("");
    }
  }, [editMedication]);
  return (
    <Box className={`grid justify-stretch items-center gap-6`}>
      <Box className={`flex justify-center items-end gap-4`}>
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant={"h6"}>الدواء</Typography>
          <PrimaryTextField
            fullWidth
            type={"text"}
            value={name}
            onChange={handleChangeMedication}
          />
        </Box>
        <Box className={`grid justify-stretch items-center gap-2`}>
          <Typography variant={"h6"}>الجرعة</Typography>
          <PrimaryTextField
            fullWidth
            type={"text"}
            value={dosage}
            onChange={handleChangeDosage}
          />
        </Box>
        <PrimaryButton onClick={handleAdd}>
          {editMedication ? <EditRounded /> : <AddRounded />}
        </PrimaryButton>
      </Box>
      {medications && medications.length > 0 && (
        <MedicationsTable data={medications} />
      )}
      <Box className={`grid justify-center items-center`}>
        <SubmitButton loading={loading}>اضف</SubmitButton>
      </Box>
    </Box>
  );
};

export default AddPrescriptionForm;
