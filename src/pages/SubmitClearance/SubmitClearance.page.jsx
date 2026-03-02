import { useContext } from "react";
import { Navigate } from "react-router-dom";
import NotOwingPage from "./notOwing.page";
import OwingPage from "./Owing.page";
import AuthContext from "../../context/LoginContext/AuthContext";

function SubmitClearancePage() {
  const {
    state: { owingFees, fees, isAuth },
  } = useContext(AuthContext);

  if (!isAuth) return <Navigate to="/" replace />;

  return owingFees ? <OwingPage fees={fees} /> : <NotOwingPage />;
}

export default SubmitClearancePage;
