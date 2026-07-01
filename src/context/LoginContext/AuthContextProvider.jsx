import AuthContext from "./AuthContext.js";
import { students, clearanceRequests } from "../../../../data.js";
import { useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "auth":
      let userPassword = action.payload.password.trim();
      let userIndexNumber = action.payload.indexNumber.trim();

      if (!userPassword || !userIndexNumber) {
        console.log("Provide valid Credentials");
        return {
          ...state,
          isAuth: false,
          errorMessage: "Provide valid Credentials",
        };
      }

      let student = students.find(
        (st) => st?.indexNumber === Number(userIndexNumber),
      );
      if (!student || student.password !== userPassword) {
        console.log("Provide valid Credentials");
        return {
          ...state,
          isAuth: false,
          errorMessage: "Provide valid Credentials",
        };
      }
      const alreadyRequested = clearanceRequests.some(
        (cr) => student.indexNumber === cr.indexNumber,
      );
      state = {
        ...state,
        studentName: student.name,
        studentIndexNumber: student.indexNumber,
        owingFees: student.fees > 0,
        isAuth: true,
        errorMessage: "",
        fees: student.fees,
        alreadyRequested,
      };
      console.log(state);
      return state;
    case "logout":
      return {
        ...state,
        isAuth: false,
        studentName: "",
        errorMessage: "",
        owingFees: true,
        studentIndexNumber: 0,
        alreadyRequested: false,
      };
    default:
      return state;
  }
}
let defaultState = {
  studentName: "",
  owingFees: true,
  isAuth: false,
  errorMessage: "",
  studentIndexNumber: 0,
  fees: 0,
  alreadyRequested: false,
};
function AuthContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function authUser(indexNumber, password) {
    dispatch({
      type: "auth",
      payload: {
        password,
        indexNumber,
      },
    });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  let contextValue = {
    state,
    authUser,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
