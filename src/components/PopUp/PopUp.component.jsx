import { useContext } from "react";
import Button from "../Button/Button.component";
import UtilityContext from "../../context/OfficerContext/UtilityContext/UtilityContext";
import AuthContext from "../../context/OfficerContext/AuthContext/AuthContext";

function PopUp(props) {
  const { toggleOverlayHandler } = useContext(UtilityContext);
  const {
    state: { officerName },
  } = useContext(AuthContext);
  return (
    <article className="bg-white w-50 p-4 border rounded-4 positionCenter">
      <h2 className="txtPrimary">Comfirm Approval</h2>
      <hr />
      <p>
        You are about to <strong className="txtSecondary">approve</strong> the{" "}
        {officerName} clearance for{" "}
        <strong className="txtSecondary">{props.studentName}</strong> with index
        number <strong className="txtSecondary">{props.indexNumber}</strong>.
        This confirm that all {officerName} obligations have been settled and
        nothing is outstanding.
      </p>
      <div className="text-center">
        <Button name="Confirm" className="bgSecondary fw-bold" />
        <Button
          name="Cancel"
          className="bgPrimary mx-2 fw-bold"
          onClick={toggleOverlayHandler}
        />
      </div>
    </article>
  );
}

export default PopUp;
