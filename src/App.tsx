import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import EmployeesManagementSystem from "./pages/EmployeesManagementSystem";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div id="app-container">
      <header>Employee Management System</header>
      <EmployeesManagementSystem />
      <ToastContainer />
    </div>
  );
}

export default App;
