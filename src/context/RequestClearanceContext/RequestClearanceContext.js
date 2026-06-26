import React from "react";

const RequestClearanceContext = React.createContext({
  state: {
    indexNumber: 1234567890,
    dateOfRequest: "",
    departments: [
      //could be two or more departments
      {
        name: "",
        status: "",
        comment: "",
      },
    ],
  },
  submitClearance: (departmentsName, indexNumber) => {},
  getExistingRequest: (indexNumber) => {},
});

export default RequestClearanceContext;
