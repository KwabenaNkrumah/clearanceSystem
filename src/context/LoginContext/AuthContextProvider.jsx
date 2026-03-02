import AuthContext from "./AuthContext.js";
import { students } from "../../../../data.js";
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
          message: "Provide valid Credentials",
        };
      }

      let student = students.find(
        (st) => st.indexNumber === Number(userIndexNumber),
      );
      if (!student || student.password !== userPassword) {
        console.log("Provide valid Credentials");
        return {
          ...state,
          isAuth: false,
          message: "Provide valid Credentials",
        };
      }
      state = {
        ...state,
        studentName: student.name,
        studentIndexNumber: student.indexNumber,
        owingFees: student.fees > 0,
        isAuth: true,
        message: "",
        fees: student.fees,
      };
      console.log(state);
      return state;
    case "logout":
      return {
        ...state,
        isAuth: false,
        studentName: "",
        message: "",
        owingFees: true,
      };
    default:
      return state;
  }
}
let defaultState = {
  studentName: "",
  owingFees: true,
  isAuth: false,
  message: "",
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
