import React from "react";

const AuthContext = React.createContext({
  state: {
    errorMessage: "",
    isAuth: false,
    officerName: "",
    department: "",
  },
  authUserHandler: (email, officer, password, department) => {},
  logOutHandler: () => {},
});

export default AuthContext;
