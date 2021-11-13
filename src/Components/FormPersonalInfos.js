import LabeledInput from "./LabeledInput";
import React, { useState } from "react";

function FormPersonalInfos(props) {
  const [editInputs, setEditInputs] = useState(false);
  const [btnValue, setBtnValue] = useState("Add personal informations");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (editInputs) {
      handleEditInputs(e);
      changeBtnSubmit();
    } else {
      handleFormValues(e);
      changeBtnSubmit();
    }
  };

  const handleFormValues = (e) => {
    const datasForm = {};
    datasForm.name = e.target[0].value;
    datasForm.familyName = e.target[1].value;
    datasForm.birthdate = e.target[2].value;
    datasForm.email = e.target[3].value;
    datasForm.phone = e.target[4].value;

    // Send datas to upper component
    props.sendDatas(datasForm);

    // Disable inputs (length -1 to not disable the submit button)
    for (let i = 0; i < e.target.length - 1; i++) {
      const inputElement = e.target[i];
      inputElement.disabled = true;
    }

    setEditInputs(true);
  };

  const handleEditInputs = (e) => {
    // Enable inputs
    for (let i = 0; i < e.target.length - 1; i++) {
      const inputElement = e.target[i];
      inputElement.disabled = false;
    }

    setEditInputs(false);
  };

  const changeBtnSubmit = () => {
    if (editInputs) {
      setBtnValue("Edit personal informations");
    } else {
      setBtnValue("Add personal informations");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <LabeledInput description="Name" type="text" name="name" />
      <LabeledInput description="Family name" type="text" name="family-name" />
      <LabeledInput description="Birth date" type="date" name="birth-name" />
      <LabeledInput description="Email" type="email" name="email" />
      <LabeledInput description="Phone" type="phone" name="phone" />
      <input type="submit" value={btnValue} />
    </form>
  );
}

export default FormPersonalInfos;
