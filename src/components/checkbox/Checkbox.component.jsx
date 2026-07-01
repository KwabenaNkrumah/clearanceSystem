function Checkbox(props) {
  return (
    <article className="p-3 border-bottom border-1">
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        value={props.name}
        checked
        className="form-check-input me-2"
        ref={props.ref}
      />
      <label htmlFor={props.name} className="txtPrimary">
        {props.name}
      </label>
    </article>
  );
}

export default Checkbox;
