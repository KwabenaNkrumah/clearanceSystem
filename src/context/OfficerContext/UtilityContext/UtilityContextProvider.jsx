import { useReducer } from "react";
import UtilityContext from "./UtilityContext";

function reducer(state, { type }) {
  switch (type) {
    case "toggleOverlay":
      return { ...state, showOverlay: !state.showOverlay };

    case "toggleRejectMessage":
      return { ...state, showRejectMessage: !state.showRejectMessage };

    default:
      return state;
  }
}

const defaultState = {
  showOverlay: false,
  showRejectMessage: false,
};

function UtilityContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);

  function toggleOverlayHandler() {
    console.log("show Overlay");

    dispatch({ type: "toggleOverlay" });
  }

  function toggleRejectMessageHandler() {
    console.log("show Reject Message");

    dispatch({ type: "toggleRejectMessage" });
    console.log(state.showRejectMessage);
  }

  const contextValue = {
    ...state,
    toggleOverlayHandler,
    toggleRejectMessageHandler,
  };
  return (
    <UtilityContext.Provider value={contextValue}>
      {children}
    </UtilityContext.Provider>
  );
}

export default UtilityContextProvider;
