import React from "react";

const UtilityContext = React.createContext({
  showOverlay: false,
  toggleOverlayHandler: () => {},
  showRejectMessage: false,
  toggleRejectMessageHandler: () => {},
});

export default UtilityContext;
