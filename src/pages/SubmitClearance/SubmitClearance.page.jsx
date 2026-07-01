import { useContext } from "react";
import { Navigate } from "react-router-dom";
import NotOwingPage from "./NotOwing.page";
import OwingPage from "./Owing.page";
import AuthContext from "../../context/LoginContext/AuthContext";

function SubmitClearancePage() {
  const {
    state: { owingFees, fees, isAuth, alreadyRequested },
  } = useContext(AuthContext);

  if (!isAuth) return <Navigate to="/student/login" replace />;
  if (alreadyRequested) return <Navigate to="/student/checkstatus" />;

  return owingFees ? <OwingPage fees={fees} /> : <NotOwingPage />;
}

export default SubmitClearancePage;
