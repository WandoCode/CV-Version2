function DisplayPersonalInfos(props) {
  return (
    <div>
      {props.datas.name && (
        <div>
          <h3>Personal datas</h3>
          <div>
            Full name: {props.datas.name} {props.datas.familyName}
          </div>
          <div>Birth date: {props.datas.birthdate}</div>
          <div>Email: {props.datas.email}</div>
          <div>Phone: {props.datas.phone}</div>
        </div>
      )}
    </div>
  );
}

export default DisplayPersonalInfos;
