import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.scss";
import EmployeeList from "./components/employee-list/EmployeeList";

function App() {
  return (
    <div id="app-container">
      <header>Employee Management System</header>
      <EmployeeList></EmployeeList>
      <ToastContainer />
    </div>
  );
}

export default App;
