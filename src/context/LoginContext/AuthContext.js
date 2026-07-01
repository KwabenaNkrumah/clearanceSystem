import React from "react";

const AuthContext = React.createContext({
  state: {
    studentName: "",
    owingFees: true,
    isAuth: false,
    errorMessage: "",
    fees: 0,
    studentIndexNumber: 200000000,
    alreadyRequested: false,
  },
  authUser: (indexNumber, password) => {},
  logout: () => {},
});

export default AuthContext;
