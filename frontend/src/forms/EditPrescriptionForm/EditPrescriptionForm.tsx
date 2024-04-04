import { useContext } from "react";
import { FormsContext } from "../../context/FormsContext";

const EditPrescriptionForm = () => {
  const { loading } = useContext(FormsContext);
  console.log(loading);

  return <></>;
};

export default EditPrescriptionForm;
