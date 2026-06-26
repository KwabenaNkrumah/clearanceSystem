import { useState } from "react";
import Button from "../Button/Button.component";

const rejectMessages = ["Owing", "Did not Return book"];
function OfficerTableRow(props) {
  return (
    <tr>
      <td>{props.studentName}</td>
      <td>{props.indexNumber}</td>
      <td>{props.requestedDate}</td>
      <td>
        {props.status === "Approved" ? (
          <p className="fw-bold txtSecondary">{props.status}</p>
        ) : props.status === "Rejected" ? (
          <p className="fw-bold txtPrimary">{props.status}</p>
        ) : (
          <>
            <Button
              name="Approve"
              className="bgSecondary fw-bold text-white rounded-0"
              onClick={props.onClickApprove}
            />
            <Button
              name="Reject"
              className="bgPrimary fw-bold text-white rounded-0"
              onClick={props.onClickReject}
            />
          </>
        )}
        {props.showRejectMessage &&
          rejectMessages.map(
            (message, i) =>
              props.clickedRowIndexNumber === props.indexNumber && (
                <p key={i} className="my-1">
                  <Button name={message} className="bg-danger text-white" />
                </p>
              ),
          )}
      </td>
    </tr>
  );
}

export default OfficerTableRow;
