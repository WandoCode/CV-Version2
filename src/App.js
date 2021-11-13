import React, { useState } from "react";
import "./App.css";
import FormEducation from "./Components/FormEducation";
import FormPersonalInfos from "./Components/FormPersonalInfos";
import DisplayPersonalInfos from "./Components/DisplayPersonalInfos";
import DisplayEducation from "./Components/DisplayEducation";
import FormExperience from "./Components/FormExperience";
import DisplayExperiences from "./Components/DisplayExperiences";

const App = () => {
  const [personalInfos, setPersonalInfos] = useState({});
  const [educationTitles, setEducationTitles] = useState([]);
  const [experiences, setExperiences] = useState([]);

  const getPersonalInfos = (datasObject) => {
    setPersonalInfos(datasObject);
  };

  const getTitle = (datasObject) => {
    const educationTitlesUpdated = educationTitles.concat([datasObject]);
    setEducationTitles(educationTitlesUpdated);
  };

  const getExperience = (datasObject) => {
    const experincesUpdated = experiences.concat([datasObject]);
    setExperiences(experincesUpdated);
  };

  const updateEducation = (key) => {
    const updatedEducation = educationTitles.filter((title) => {
      return title.key !== key;
    });
    setEducationTitles(updatedEducation);
  };

  const updateExperiences = (key) => {
    const updatedExperiences = experiences.filter((experience) => {
      return experience.key !== key;
    });
    setExperiences(updatedExperiences);
  };

  return (
    <div>
      <h3>Personal informations</h3>
      <FormPersonalInfos sendDatas={getPersonalInfos} />
      <DisplayPersonalInfos datas={personalInfos} />
      <h3>Education</h3>
      <FormEducation sendDatas={getTitle} />
      <DisplayEducation datas={educationTitles} updateDatas={updateEducation} />
      <h3>Experiences</h3>
      <FormExperience sendDatas={getExperience} />
      <DisplayExperiences datas={experiences} updateDatas={updateExperiences} />
    </div>
  );
};

export default App;
