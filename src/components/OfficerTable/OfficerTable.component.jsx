import { useState, useContext, useEffect, useMemo } from "react";
import OfficerTableHead from "../OfficerTableHead/OfficerTableHead.component";
import OfficerTableRow from "../OfficerTableRow/OfficerTableRow.component";
import GetRequestContext from "../../context/OfficerContext/GetRequestContext/GetRequestContext";
import AuthContext from "../../context/OfficerContext/AuthContext/AuthContext";
import UtilityContext from "../../context/OfficerContext/UtilityContext/UtilityContext";
import Overlay from "../overlay/overlay.component";

function OfficerTable(props) {
  const requestCtxValues = useContext(GetRequestContext);
  const {
    state: { officerName, department },
  } = useContext(AuthContext);

  const [clickedRowIndexNumber, setClickedRowIndexNumber] = useState(null);

  const {
    toggleOverlayHandler,
    toggleRejectMessageHandler,
    showRejectMessage,
  } = useContext(UtilityContext);

  useEffect(() => {
    requestCtxValues.getRequestsHandler(officerName, department);
  }, [officerName]);

  const requests = useMemo(() => requestCtxValues.state.requests);
  console.log(requests);

  function confirmApprovalHandler(indexNumber) {
    toggleOverlayHandler();
    props.setIndexNumber(indexNumber);
  }

  function showRejectMessageHandler(indexNumber) {
    toggleRejectMessageHandler();
    setClickedRowIndexNumber(indexNumber);
  }

  return (
    <>
      {requests.length ? (
        <table className="table my-4">
          <OfficerTableHead />
          <tbody>
            {requests.map((req) => (
              <OfficerTableRow
                studentName={req?.studentName}
                indexNumber={req?.indexNumber}
                requestedDate={req?.dateOfRequest}
                status={req?.request.status}
                key={req?.indexNumber}
                onClickApprove={confirmApprovalHandler.bind(
                  null,
                  req.indexNumber,
                )}
                onClickReject={showRejectMessageHandler.bind(
                  null,
                  req.indexNumber,
                )}
                showRejectMessage={showRejectMessage}
                clickedRowIndexNumber={clickedRowIndexNumber}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <h2 className="positionCenter txtPrimary fw-bold">No Requests Found</h2>
      )}
    </>
  );
}

export default OfficerTable;
