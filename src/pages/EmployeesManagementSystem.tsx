import EmployeeList from "../components/employee-list/EmployeeList";
import EmployeeForm from "../components/employee-form/EmployeeForm";
import { useState } from "react";

export default function EmployeesManagementSystem() {
  const [updateEmployeeList, setUpdateEmployeeList] = useState(false);

  return (
    <>
      <EmployeeForm
        onAddEmployee={() => setUpdateEmployeeList(!updateEmployeeList)}
      />
      <EmployeeList updateEmployeeList={updateEmployeeList} />
    </>
  );
}
