function DisplayExperiences(props) {
  const generateHeading = () => {
    if (props.datas.length > 0) {
      return <h3>Experiences</h3>;
    } else {
      return null;
    }
  };

  const generateExperiences = () => {
    return props.datas.map((experience) => {
      return (
        <div id={experience.key} key={experience.key}>
          <div>Company: {experience.company}</div>
          <div>Title: {experience.title}</div>
          <div>Tasks: {experience.tasks}</div>
          <div>From: {experience.from}</div>
          <div>To: {experience.to}</div>

          <button
            onClick={() => {
              removeExperiences(experience.key);
            }}>
            Remove
          </button>
        </div>
      );
    });
  };

  const removeExperiences = (key) => {
    props.updateDatas(key);
  };

  return (
    <div>
      <div>
        {generateHeading()}
        {generateExperiences()}
      </div>
    </div>
  );
}

export default DisplayExperiences;
