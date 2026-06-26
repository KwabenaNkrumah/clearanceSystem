import { useReducer } from "react";
import { students, clearanceRequests, officers } from "../../../../data";
import RequestClearanceContext from "./RequestClearanceContext";

function reducer(state, action) {
  switch (action.type) {
    case "submitRequest":
      const requestAlreadyExists = clearanceRequests.some(
        (req) => req.indexNumber === Number(action.payload.indexNumber),
      );
      // console.log(
      //   clearanceRequests.map(
      //     (c) => c.indexNumber === action.payload.indexNumber,
      //   ),
      // );
      // console.log(requestAlreadyExists);

      if (!requestAlreadyExists) {
        console.log("After Exist");

        let requests = action.payload.officerNames.map((officerName) => {
          return {
            officer: officerName,
            status: "Pending",
            comment: "",
          };
        });

        console.log(Number(action.payload.indexNumber));

        let indexNumber = students.find(
          (st) => Number(action.payload.indexNumber) === st.indexNumber,
        ).indexNumber;

        const requestdetails = {
          indexNumber,
          dateOfRequest: new Date().toISOString().split("T")[0],
          departments: requests,
        };
        console.log("Before Push \n", clearanceRequests);
        clearanceRequests.push(requestdetails);

        console.log("After Push \n", clearanceRequests);

        return {
          ...state,
          ...requestdetails,
        };
      }
    case "getExistingRequest":
      const existingRequest = clearanceRequests.find(
        (cr) => action.payload.indexNumber === cr.indexNumber,
      );

      console.log(existingRequest);

      return {
        ...state,
        departments: existingRequest.departments,
        dateOfRequest: existingRequest.dateOfRequest,
        indexNumber: existingRequest.indexNumber,
      };

    default:
      return state;
  }
}

let defaultSate = {
  indexNumber: 1234567890,
  dateOfRequest: "",
  departments: [
    {
      name: "",
      status: "",
      comment: "",
    },
  ],
};

function RequestClearanceContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, defaultSate);

  function submitClearance(officerNames, indexNumber) {
    dispatch({
      type: "submitRequest",
      payload: {
        officerNames,
        indexNumber,
      },
    });
  }
  function getExistingRequest(indexNumber) {
    dispatch({ type: "getExistingRequest", payload: { indexNumber } });
  }

  let contextValue = {
    state,
    submitClearance,
    getExistingRequest,
  };

  return (
    <RequestClearanceContext.Provider value={contextValue}>
      {props.children}
    </RequestClearanceContext.Provider>
  );
}

export default RequestClearanceContextProvider;
