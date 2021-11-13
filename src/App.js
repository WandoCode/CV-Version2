import React, { useState } from "react";
import "./App.css";
import FormEducation from "./Components/FormEducation";
import FormPersonalInfos from "./Components/FormPersonalInfos";
import DisplayPersonalInfos from "./Components/DisplayPersonalInfos";
import DisplayEducation from "./Components/DisplayEducation";

const App = () => {
  const [personalInfos, setPersonalInfos] = useState({});
  const [educationTitles, setEducationTitles] = useState([]);

  const getPersonalInfos = (datasObject) => {
    setPersonalInfos(datasObject);
  };

  const getTitle = (datasObject) => {
    const educationTitlesUpdated = educationTitles.concat([datasObject]);
    setEducationTitles(educationTitlesUpdated);
  };

  const updateEducation = (key) => {
    const updatedEducation = educationTitles.filter((title) => {
      return title.key !== key;
    });
    setEducationTitles(updatedEducation);
  };

  return (
    <div>
      <h3>Personal informations</h3>
      <FormPersonalInfos sendDatas={getPersonalInfos} />
      <DisplayPersonalInfos datas={personalInfos} />
      <h3>Education</h3>
      <FormEducation sendDatas={getTitle} />
      <DisplayEducation datas={educationTitles} updateDatas={updateEducation} />
    </div>
  );
};

export default App;
