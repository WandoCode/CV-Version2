import LabeledInput from "./LabeledInput";
import React from "react";
import uniqid from "uniqid";

function FormEducation(props) {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const datasForm = {};
    datasForm.key = uniqid();
    datasForm.school = e.target[0].value;
    datasForm.title = e.target[1].value;
    datasForm.date = e.target[2].value;

    // Send datas to upper component
    props.sendDatas(datasForm);

    // Reset form
    for (let i = 0; i < e.target.length - 1; i++) {
      let element = e.target[i];
      element.value = "";
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <LabeledInput description="School" type="text" name="school" />
      <LabeledInput description="Title" type="text" name="title" />
      <LabeledInput description="date" type="date" name="date" />
      <input type="submit" value="Add title" />
    </form>
  );
}

export default FormEducation;
