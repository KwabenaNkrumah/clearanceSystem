import { useContext, useEffect } from "react";
import Button from "../../components/Button/Button.component";
import ProgressBar from "../../components/ProgressBar/ProgressBar.component";
import Table from "../../components/Table/Table.component";
import RequestClearanceContext from "../../context/RequestClearanceContext/RequestClearanceContext";
import AuthContext from "../../context/LoginContext/AuthContext";
import { Navigate } from "react-router-dom";

function CheckStatus() {
  let {
    state: { departments },
    getExistingRequest,
  } = useContext(RequestClearanceContext);

  let {
    state: { isAuth, studentIndexNumber, alreadyRequested },
  } = useContext(AuthContext);

  if (!isAuth) return <Navigate to="/student/login" replace />;

  useEffect(() => {
    if (alreadyRequested && studentIndexNumber && isAuth) {
      getExistingRequest(studentIndexNumber);
    }
  }, [alreadyRequested, studentIndexNumber, isAuth]);

  const totalDepartment = departments.length;
  const numberCleared = departments.filter(
    (dept) => dept.status === "Approved",
  ).length;
  const numberPending = departments.filter(
    (dept) => dept.status === "Pending",
  ).length;
  const numberRejected = departments.filter(
    (dept) => dept.status === "Rejected",
  ).length;
  // console.log(numberCleared, departments);
  const clearedPercentage = (numberCleared / totalDepartment) * 100;
  const rejectedPercentage = (numberRejected / totalDepartment) * 100;
  const pendingPercentage = (numberPending / totalDepartment) * 100;

  const allDepartmentCleared = departments.every(
    (dept) => dept.status === "Approved",
  );

  return (
    <section className="p-5">
      <ProgressBar
        totalDepartment={totalDepartment}
        numberCleared={numberCleared}
        clearedPercentage={clearedPercentage}
        pendingPercentage={pendingPercentage}
        rejectedPercentage={rejectedPercentage}
      />
      <Table departments={departments} />
      <Button
        className="bg-success  text-white fw-bold m-auto py-2 px-4 d-block"
        name="Download Clearance Certificate"
        disabled={!allDepartmentCleared}
      />
    </section>
  );
}

export default CheckStatus;
