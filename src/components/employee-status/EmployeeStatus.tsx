import { useState } from "react";
import "./EmployeeStatus.scss";
import { Status } from "./employeeStatusUtils";
type EmployeeStatusProps = {
  employeeId: number;
  employeeStatus: Status;
};

export default function EmployeeStatus(props: EmployeeStatusProps) {
  const [status, setStatus] = useState(props.employeeStatus);

  function updateStatus(status: Status) {
    setStatus(status);
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
