function DisplayEducation(props) {
  const generateHeading = () => {
    if (props.datas.length > 0) {
      return <h3>Education</h3>;
    } else {
      return null;
    }
  };

  const generateTitles = () => {
    return props.datas.map((title) => {
      return (
        <div id={title.key} key={title.key}>
          <div>School: {title.school}</div>
          <div>Title: {title.title}</div>
          <div>Date: {title.date}</div>
          <button
            onClick={() => {
              removeTitle(title.key);
            }}>
            Remove
          </button>
        </div>
      );
    });
  };

  const removeTitle = (key) => {
    props.updateDatas(key);
  };

  return (
    <div>
      <div>
        {generateHeading()}
        {generateTitles()}
      </div>
    </div>
  );
}

export default DisplayEducation;
