function LabeledInput(props) {
  return (
    <div>
      <label form={props.name}>{props.description}</label>
      <input type={props.type} name={props.name} required />
    </div>
  );
}

export default LabeledInput;
