import { memo } from "react";

function Button(props) {
  console.log("Button component");

  return (
    <button
      className={`btn d-inline-block ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type}
    >
      {props.name}
    </button>
  );
}

export default memo(Button);
