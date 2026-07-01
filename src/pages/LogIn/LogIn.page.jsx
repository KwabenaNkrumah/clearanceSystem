import Heading from "../../components/Heading/Heading.component";
import Label from "../../components/Label/Label.component";
import Input from "../../components/Input/Input.component";
import Button from "../../components/Button/Button.component";
import { useNavigate } from "react-router-dom";

import eyeIcon from "../../assets/icons8-eye-24.png";
import hideIcon from "../../assets/icons8-hide-24.png";
import { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../context/LoginContext/AuthContext";

function LogInpage(props) {
  const [hidden, setHidden] = useState(true);
  const ctx = useContext(AuthContext);
  const indexNumberRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  function formSubmitHandler(e) {
    e.preventDefault();
    let password = passwordRef.current.value;
    let indexNumber = indexNumberRef.current.value;
    ctx.authUser(indexNumber, password);
    // passwordRef.current.value = indexNumberRef.current.value = "";
  }

  useEffect(() => {
    if (ctx.state.isAuth) {
      navigate("/student/requestpage", { replace: true });
    }
  }, [ctx.state.isAuth, navigate]);

  return (
    <section className="d-flex justify-content-center align-items-center h-75">
      <div className="bg-white p-4 rounded-3">
        <Heading title="LogIn to Your Account" />
        <form className="form-group" onSubmit={formSubmitHandler}>
          <div>
            <Label htmlFor="indexNumber">Index Number</Label>
            <Input
              type="text"
              id="indexNumber"
              name="indexNumber"
              placeholder="Index Number e.g 0123456789"
              ref={indexNumberRef}
            />
          </div>
          <div className="my-4">
            <Label htmlFor="password">Password</Label>
            <div className="position-relative">
              <Input
                type={hidden ? "password" : "text"}
                id="password"
                name="password"
                placeholder="Enter Password"
                ref={passwordRef}
              />
              <Button
                name={
                  <img
                    src={hidden ? eyeIcon : hideIcon}
                    alt={hidden ? "Show password icon" : "hide password icon"}
                  />
                }
                className="position-absolute top-0 end-0 bottom-50 border-0"
                type="button"
                onClick={() => {
                  setHidden((preValue) => !preValue);
                }}
              />
            </div>
          </div>
          {ctx.state.errorMessage && (
            <p className="text-danger fw-bold">{ctx.state.errorMessage}</p>
          )}

          <hr />
          <Button name="LogIn" className="bgPrimary w-100" type="submit" />
        </form>
      </div>
    </section>
  );
}

export default LogInpage;
