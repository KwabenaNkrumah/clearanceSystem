import { memo } from "react";

function TableRow(props) {
  return (
    <tr>
      <td>Library</td>
      <td className="d-flex">
        <div className="align-self-center d-flex justify-content-center align-items-center w-25">
          <img src={props.icon} alt="Pending Icon" className="w-25" />
        </div>
        <p className="align-self-center pt-2 ">Accepted</p>
      </td>
      <td>hsabj</td>
    </tr>
  );
}

export default memo(TableRow);
