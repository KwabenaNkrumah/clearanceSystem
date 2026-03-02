import { memo } from "react";
function Label(props) {
  console.log("Label component");
  return (
    <label htmlFor={props.htmlFor} className="form-label">
      {props.children}
    </label>
  );
}

export default memo(Label);
