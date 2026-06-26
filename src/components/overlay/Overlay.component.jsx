import { useContext } from "react";
import PopUp from "../PopUp/PopUp.component";
import UtilityContext from "../../context/OfficerContext/UtilityContext/UtilityContext";
import GetRequestContext from "../../context/OfficerContext/GetRequestContext/GetRequestContext";
function Overlay(props) {
  const { toggleOverlayHandler } = useContext(UtilityContext);
  const {
    state: { requests },
  } = useContext(GetRequestContext);
  console.log(props.indexNumber);

  const request = requests.find((req) => req.indexNumber === props.indexNumber);
  return (
    <section className="postion-relative">
      <article
        className="position-fixed top-0 vw-100 vh-100 bg-black bg-opacity-10"
        onClick={toggleOverlayHandler}
      ></article>
      <PopUp
        studentName={request.studentName}
        indexNumber={request.indexNumber}
      />
    </section>
  );
}

export default Overlay;
