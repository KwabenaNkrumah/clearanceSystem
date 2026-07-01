import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthContextProvider from "./context/LoginContext/AuthContextProvider.jsx";
import RequestClearanceContextProvider from "./context/RequestClearanceContext/RequestClearanceContextProvider.jsx";
import OfficerAuthContextProvider from "./context/OfficerContext/AuthContext/AuthContextProvider.jsx";
import OfficerGetRequestContext from "./context/OfficerContext/GetRequestContext/GetRequestContextProvider.jsx";
import OfficerUtilityContext from "./context/OfficerContext/UtilityContext/UtilityContextProvider.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./main.css";

import StudentLogInpage from "./pages/LogIn/LogIn.page.jsx";
import SubmitClearancePage from "./pages/SubmitClearance/SubmitClearance.page.jsx";
import CheckStatus from "./pages/CheckStatus/CheckStatus.page.jsx";

import OfficerLogInPage from "./pages/Officer/LogIn/Officer.Login.page.jsx";
import OfficerDashboardPage from "./pages/Officer/Dashboard/Dashboard.page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/student/login",
        element: <StudentLogInpage />,
      },
      {
        path: "/student/requestpage",
        element: <SubmitClearancePage />,
      },
      {
        path: "/student/checkstatus",
        element: <CheckStatus />,
      },
      {
        path: "/officer/login",
        element: <OfficerLogInPage />,
      },
      {
        path: "/officer/dashboard",
        element: <OfficerDashboardPage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <OfficerAuthContextProvider>
        <OfficerGetRequestContext>
          <OfficerUtilityContext>
            <RequestClearanceContextProvider>
              <RouterProvider router={router} />
            </RequestClearanceContextProvider>
          </OfficerUtilityContext>
        </OfficerGetRequestContext>
      </OfficerAuthContextProvider>
    </AuthContextProvider>
  </StrictMode>,
);
