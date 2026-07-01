import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.component";
import Checkbox from "../../components/checkbox/Checkbox.component";
import Heading from "../../components/Heading/Heading.component";
import AuthContext from "../../context/LoginContext/AuthContext";
import RequestClearanceContext from "../../context/RequestClearanceContext/RequestClearanceContext";
import warningLogo from "./../../assets/correct.png";

import { useContext, useEffect, useRef } from "react";

function NotOwingPage() {
  let navigate = useNavigate();
  let accountsRef = useRef();
  let libraryRef = useRef();
  let hostelRef = useRef();
  const requestCtx = useContext(RequestClearanceContext);
  const {
    state: { studentIndexNumber },
  } = useContext(AuthContext);

  function submitClearanceRequestHandler(e) {
    e.preventDefault();
    let accounts = accountsRef.current.checked && accountsRef.current.value;
    let library = libraryRef.current.checked && libraryRef.current.value;
    let hostel = hostelRef.current.checked && hostelRef.current.value;

    requestCtx.submitClearance([accounts, library, hostel], studentIndexNumber);

    navigate("/student/checkstatus", { replace: true });
  }

  return (
    <section>
      <Heading title="Apply for Clearance" />
      <div className="container bg-white rounded-4 p-4">
        <div className="d-flex bg-success-subtle p-2 pl-3  rounded-2 txtPrimary">
          <div>
            <img src={warningLogo} alt="Warning logo" />
          </div>
          <div className="ms-4 align-self-center">
            <h4 className="h4 txtSecondary">You have no outstanding balance</h4>
            <p className="text-success">You can now apply for clearance</p>
          </div>
        </div>
        <h5 className="my-3">Complete the following clearance requirement</h5>

        <form onSubmit={submitClearanceRequestHandler}>
          <section className="bg-light custom-bullet-color rounded-2 border">
            <Checkbox name="Accounts" ref={accountsRef} />
            <Checkbox name="Library" ref={libraryRef} />
            <Checkbox name="Hostel" ref={hostelRef} />
          </section>
          <div className="d-flex justify-content-center mt-4">
            <Button
              name="Submit Clearance Request"
              className="bgPrimary"
              type="submit"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default NotOwingPage;
