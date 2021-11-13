function LabeledInput(props) {
  return (
    <div>
      <label form={props.name}>{props.description}</label>
      {props.type !== "textarea" ? (
        <input type={props.type} name={props.name} required />
      ) : (
        <textarea name={props.name} required></textarea>
      )}
    </div>
  );
}

export default LabeledInput;
