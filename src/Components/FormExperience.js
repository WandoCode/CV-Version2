import LabeledInput from "./LabeledInput";
import React from "react";
import uniqid from "uniqid";

function FormExperience(props) {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const datasForm = {};
    datasForm.key = uniqid();
    datasForm.company = e.target[0].value;
    datasForm.title = e.target[1].value;
    datasForm.tasks = e.target[2].value;
    datasForm.from = e.target[3].value;
    datasForm.to = e.target[4].value;

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
      <LabeledInput description="Company" type="text" name="company" />
      <LabeledInput description="Title" type="text" name="title" />
      <LabeledInput description="Tasks" type="textarea" name="tasks" />
      <LabeledInput description="From" type="date" name="from" />
      <LabeledInput description="to" type="date" name="to" />
      <input type="submit" value="Add experience" />
    </form>
  );
}

export default FormExperience;
