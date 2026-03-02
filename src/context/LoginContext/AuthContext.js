import React from "react";

const AuthContext = React.createContext({
  state: {
    studentName: "",
    owingFees: true,
    isAuth: false,
    message: "",
    fees: 0,
  },
  authUser: (indexNumber, password) => {},
  logout: () => {},
});

export default AuthContext;
