import { memo } from "react";

function TableRow(props) {
  return (
    <tr>
      <td>{props.departmentName}</td>
      <td className="d-flex">
        <div className="align-self-center d-flex justify-content-center align-items-center w-25">
          <img src={props.icon} alt="Pending Icon" className="w-25" />
        </div>
        <p className={`align-self-center pt-2 fw-bold ${props.color}`}>
          {props.status}
        </p>
      </td>
      <td>{props.comment}</td>
    </tr>
  );
}

export default memo(TableRow);
