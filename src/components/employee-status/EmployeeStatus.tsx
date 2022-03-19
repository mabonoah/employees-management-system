import { useState } from "react";
import { patch } from "../../api/api";
import { Employee } from "../employee-list/employeeListUtils";
import "./EmployeeStatus.scss";
import { Status } from "./employeeStatusUtils";
import { successToast } from "../../utils/toast";

type EmployeeStatusProps = {
  employee: Employee;
};

export default function EmployeeStatus(props: EmployeeStatusProps) {
  const [status, setStatus] = useState(props.employee.status);

  function updateStatus(status: Status) {
    const employee: Employee = { ...props.employee };
    employee.status = status;
    patch(`employees/${employee.id}`, employee).then(() => {
      setStatus(status);
      successToast(`${employee.name} status is updated successfully!`);
    });
  }

  const statusList: Status[] = [
    Status.added,
    Status.incheck,
    Status.approved,
    Status.active,
    Status.inactive,
  ];

  return (
    <ul className="status-list">
      {statusList.map((statusItem: Status, index: number) => {
        return (
          <li key={index} className="status-item">
            <div
              className={
                status === statusItem
                  ? `item-wrap ${statusItem.toLowerCase()}`
                  : "item-wrap"
              }
              onClick={() => updateStatus(statusItem)}
            >
              <p className="item-title">{statusItem}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
