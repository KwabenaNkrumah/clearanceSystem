import React from "react";

const GetRequestContext = React.createContext({
  state: {
    requests: [
      {
        indexNumber: 1,
        dateOfRequest: "",
        studentName: "",
        request: {
          officer: "",
          status: "",
          comment: "",
        },
      },
    ],
  },
  getRequestsHandler: (
    officerName,
    department,
    status = null,
    filter = false,
  ) => {},
  // getRejectedOrApprovedOrPendingRequestsHandler: (status) => {},
});

export default GetRequestContext;
