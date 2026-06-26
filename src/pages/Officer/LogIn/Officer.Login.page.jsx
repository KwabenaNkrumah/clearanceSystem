import Label from "../../../components/Label/Label.component";
import Input from "../../../components/Input/Input.component";
import Select from "../../../components/Select/Select.component";
import Button from "../../../components/Button/Button.component";
import { useContext, useEffect, useRef, useState } from "react";
// import AuthContext from "../../../context/OfficerContext/AuthContext/AuthContext";
import AuthContext from "../../../context/OfficerContext/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
function LogIn() {
  const [officerType, setOfficerType] = useState("------");
  const navigate = useNavigate();

  const passwordRef = useRef();
  const emailRef = useRef();
  const departmentRef = useRef();
  const ctx = useContext(AuthContext);
  const OFFICERS = ["------", "Accounts", "Library", "Department"];
  const DEPARTMENTS = ["------", "I.T", "Mathematics"];

  // when officer Type change
  function officerTypeChangeHandler(e) {
    setOfficerType(e.target.value);
  }

  // When form is submitted function
  function formSubmitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log("Form submited");
    const department = departmentRef.current?.value;
    // console.log(email, password, officerType);
    ctx.authUserHandler(officerType, email, password, department);

    passwordRef.current.value = emailRef.current.value = "";
  }

  useEffect(() => {
    if (ctx.state.isAuth) {
      navigate("/officer/dashboard", { replace: true });
      console.log("auth");
    }
  }, [ctx.state.isAuth, navigate]);

  console.log("Main");
  console.log(ctx);

  return (
    <form
      onSubmit={formSubmitHandler}
      className="form d-flex justify-content-center align-items-center mt-5"
    >
      <div className="w-50 p-5">
        <h2 className="h2 txtPrimary text-center mb-3">LogIn</h2>
        <div>
          <Label>Select Officer Type</Label>
          <Select
            officers={OFFICERS}
            onChange={officerTypeChangeHandler}
            value={officerType}
          />
        </div>

        {officerType === "Department" && (
          <div>
            <Label>Select Department</Label>
            <Select officers={DEPARTMENTS} ref={departmentRef} />
          </div>
        )}
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            placeholder="Email e.g abc@gmail.com"
            id="email"
            name="email"
            ref={emailRef}
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            placeholder="Enter Password"
            id="password"
            name="password"
            ref={passwordRef}
          />
        </div>
        <p className="fw-bold text-danger my-3">{ctx.state.errorMessage}</p>
        <hr />
        <Button
          name="Submit"
          type="Submit"
          className="bgPrimary mt-2 d-block m-auto"
        />
      </div>
    </form>
  );
}

export default LogIn;
