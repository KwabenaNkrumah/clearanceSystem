import { memo } from "react";
function Input(props) {
  console.log("Input component " + props.placeholder);
  return (
    <input
      type={props.type}
      className={`form-control ${props.className}`}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      ref={props.ref}
      onChange={props.onChange}
    />
  );
}

export default memo(Input);
