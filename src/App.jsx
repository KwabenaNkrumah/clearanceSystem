import Header from "./components/Header/Header.component";
import LogInpage from "./pages/LogIn/LogIn.page";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="bg-light vh-100">
      <Header heading="SCHOOL CLEARANCE SYSTEM" />
      <Outlet />
    </main>
  );
}

export default App;
