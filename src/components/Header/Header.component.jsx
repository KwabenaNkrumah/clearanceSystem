import Button from "../Button/Button.component";
import logo from "../../assets/mortarboard.png";
import { memo, useContext } from "react";
import AuthContext from "../../context/LoginContext/AuthContext";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const {
    state: { isAuth, studentName },
    logout,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  function logoutHandler(e) {
    e.preventDefault();
    console.log("clicked");
    logout();
    navigate("/", { replace: true });
  }

  return (
    <header className="d-flex justify-content-between p-3 bgPrimary border-bottom border-5 border-warning">
      <div className="align-self-center d-flex">
        <img
          src={logo}
          alt="mortarboard icon"
          className="d-block align-self-center"
        />
        <h1 className="h1 align-self-center">{props.heading}</h1>
      </div>
      {isAuth && <p className="align-self-center">Welcome, {studentName}</p>}
      {isAuth && (
        <Button
          name="Logout"
          className="bgDarkPrimary"
          onClick={logoutHandler}
        />
      )}
    </header>
  );
}

export default memo(Header);
