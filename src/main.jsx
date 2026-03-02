import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthContextProvider from "./context/LoginContext/AuthContextProvider.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./main.css";
import LogInpage from "./pages/LogIn/LogIn.page.jsx";
import SubmitClearancePage from "./pages/SubmitClearance/SubmitClearance.page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LogInpage />,
      },
      {
        path: "/login",
        element: <LogInpage />,
      },
      {
        path: "/clearancepage",
        element: <SubmitClearancePage />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>,
);
