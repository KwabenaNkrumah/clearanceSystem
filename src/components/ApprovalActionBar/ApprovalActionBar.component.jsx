import Input from "../Input/Input.component";
import Button from "../Button/Button.component";
import { use, useContext, useEffect, useRef, useState } from "react";
import GetRequestContext from "../../context/OfficerContext/GetRequestContext/GetRequestContext";
import AuthContext from "../../context/OfficerContext/AuthContext/AuthContext";

function ApprovalActionBar() {
  const [status, setStatus] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  const { getRequestsHandler } = useContext(GetRequestContext);

  const {
    state: { officerName, department },
  } = useContext(AuthContext);

  function filterByStatus(statusClicked) {
    if (status === statusClicked) {
      // console.log("status are the same");
      setStatus("");
      getRequestsHandler(officerName, department, "", searchValue);
    } else {
      setStatus(statusClicked);
      // getRejectedOrApprovedOrPendingRequestsHandler(statusClicked);
      getRequestsHandler(officerName, department, statusClicked, searchValue);
    }
  }

  useEffect(
    (e) => {
      let timeout = setTimeout(
        () => {
          getRequestsHandler(officerName, department, status, searchValue);
        },

        1000,
      );

      return () => clearTimeout(timeout);
    },
    [searchValue],
  );

  return (
    <section className="d-flex justify-content-between my-3">
      <div className="align-self-center">
        <Button
          name="Pending"
          className={status === "Pending" && "bgTertiary"}
          onClick={filterByStatus.bind(null, "Pending")}
        />
        <Button
          name="Approved"
          className={`${status === "Approved" && "bgSecondary "} mx-1  `}
          onClick={filterByStatus.bind(null, "Approved")}
        />
        <Button
          name="Rejected"
          className={status === "Rejected" && "bgPrimary"}
          onClick={filterByStatus.bind(null, "Rejected")}
        />
      </div>
      <div className="align-self-center">
        <Input
          placeholder="Search"
          ref={inputRef}
          onChange={(e) => {
            console.log(e.target.value);
            setSearchValue(e.target.value);
          }}
          value={searchValue}
        />
      </div>
    </section>
  );
}

export default ApprovalActionBar;
