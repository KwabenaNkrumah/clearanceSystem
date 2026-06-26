import OfficerTable from "../../../components/OfficerTable/OfficerTable.component";
import ApprovalActionBar from "../../../components/ApprovalActionBar/ApprovalActionBar.component";
import { useContext, useState } from "react";
import AuthContext from "../../../context/OfficerContext/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";
import UtilityContext from "../../../context/OfficerContext/UtilityContext/UtilityContext";
import Overlay from "../../../components/overlay/overlay.component";

function Dashboard() {
  const {
    state: { isAuth },
  } = useContext(AuthContext);
  const { showOverlay } = useContext(UtilityContext);

  const [indexNumber, setIndexNumber] = useState(null);

  console.log(indexNumber);
  return isAuth ? (
    <>
      <article className="container">
        <ApprovalActionBar />
        <OfficerTable setIndexNumber={setIndexNumber} />
      </article>
      {showOverlay && <Overlay indexNumber={indexNumber} />}
    </>
  ) : (
    <Navigate to="/officer/login" replace />
  );
}

export default Dashboard;
