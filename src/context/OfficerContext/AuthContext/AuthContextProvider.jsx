import AuthContext from "./AuthContext";
import { officers } from "../../../../../data";
import { useReducer } from "react";

const reducer = function (state, action) {
  switch (action.type) {
    case "auth":
      let { officerName, department, email, password } = action.payload;
      email = email?.trim();
      password = password?.trim();

      const officer = officers.find((officer) =>
        department
          ? officer.name === officerName &&
            email === officer.email &&
            officer.department === department
          : officer.name === officerName && email === officer.email,
      );

      if (!officer) {
        console.log("no officer");
        return {
          ...state,
          errorMessage: "Provide valid Credentials",
          isAuth: false,
          officerName: "",
          department: "",
        };
      }

      if (password !== officer.password) {
        console.log("no officer");
        return {
          ...state,
          errorMessage: "Provide valid Credentials",
          isAuth: false,
          officerName: "",
          department: "",
        };
      }
      console.log(officer);
      return {
        ...state,
        errorMessage: "",
        isAuth: true,
        officerName: officer.name,
        department,
      };
    case "logout":
      return {
        ...state,
        errorMessage: "",
        isAuth: false,
        officerName: "",
      };
  }
};

const defaultState = {
  errorMessage: "",
  isAuth: false,
  officerName: "",
  department: "",
};
function AuthContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function authUserHandler(officerName, email, password, department = "") {
    dispatch({
      type: "auth",
      payload: {
        officerName,
        department,
        email,
        password,
      },
    });
  }

  function logOutHandler() {
    dispatch({ type: "logout" });
  }
  const contextValue = {
    state,
    authUserHandler,
    logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
