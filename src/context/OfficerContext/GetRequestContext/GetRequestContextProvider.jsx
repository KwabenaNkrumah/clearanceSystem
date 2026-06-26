import GetRequestContext from "./GetRequestContext";
import { clearanceRequests, students } from "../../../../../data";
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "getOfficerRequests":
      let requests = !action.payload.department
        ? clearanceRequests.map((req) => ({
            // GET OFFICER CLEAREANCE REQUESTS BY STUDENTS IF OFFICER IS NOT FROM DEPARTMENT
            indexNumber: req.indexNumber,
            dateOfRequest: req.dateOfRequest,
            studentName: students.find(
              (student) => req.indexNumber === student.indexNumber,
            ).name,
            request: req.departments.find(
              (department) => department.officer === action.payload.officerName,
            ),
          }))
        : clearanceRequests
            .filter(
              (req) =>
                // GET OFFICER CLEAREANCE REQUESTS BY STUDENTS IF OFFICER IS FROM DEPARTMENT
                req.department === action.payload.department,
            )
            .map((req) => ({
              indexNumber: req.indexNumber,
              dateOfRequest: req.dateOfRequest,
              studentName: students.find(
                (student) => req.indexNumber === student.indexNumber,
              ).name,
              request: req.departments.find(
                (department) =>
                  department.officer === action.payload.officerName,
              ),
            }));

      if (action.payload.filterByStatus) {
        requests = requests.filter(
          (req) => req.request.status === action.payload.filterByStatus,
        );
      }

      if (action.payload.filterBySearch) {
        requests = requests.filter(
          (req) =>
            req.studentName
              .toLowerCase()
              .includes(action.payload.filterBySearch.toLowerCase()) ||
            String(req.indexNumber).includes(action.payload.filterBySearch),
        );
      }
      console.log(action.payload.filterBySearch);
      console.log(requests);
      return {
        ...state,
        requests,
      };
  }
}

const defaultState = {
  requests: [
    {
      indexNumber: 1,
      studentName: "",
      dateOfRequest: "",
      request: {
        officer: "",
        status: "",
        comment: "",
      },
    },
  ],
};

function GetRequestContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const getRequestsHandler = function (
    officerName,
    department,
    filterByStatus = "",
    filterBySearch = "",
  ) {
    dispatch({
      type: "getOfficerRequests",
      payload: {
        officerName,
        department,
        filterByStatus,
        filterBySearch,
      },
    });
  };

  // function getRejectedOrApprovedOrPendingRequestsHandler(status) {
  //   dispatch({
  //     type: "getRejectedOrApprovedOrPendingRequests",
  //     payload: { status },
  //   });
  //   console.log(status);
  // }
  const contextValues = {
    state,
    getRequestsHandler,
    // getRejectedOrApprovedOrPendingRequestsHandler,
  };
  return (
    <GetRequestContext.Provider value={contextValues}>
      {props.children}
    </GetRequestContext.Provider>
  );
}

export default GetRequestContextProvider;
