function Select(props) {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className="form-select mb-3"
      name="officer"
      id="officer"
      ref={props.ref}
    >
      <optgroup>
        {props.officers.map((officer, i) => (
          <option value={officer} key={i}>
            {officer}
          </option>
        ))}
      </optgroup>
    </select>
  );
}

export default Select;
