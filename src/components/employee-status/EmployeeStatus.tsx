import "./EmployeeStatus.scss";
import { Status } from "./employeeStatusUtils";

export default function EmployeeStatus({ ...props }) {
  const statuses: Status[] = [
    Status.added,
    Status.incheck,
    Status.approved,
    Status.active,
    Status.inactive,
  ];

  return (
    <ul className="status-list">
      {statuses.map((status: Status) => {
        return (
          <li key={status} className="status-item">
            <div
              className={
                props.currentStatus === status
                  ? `item-wrap ${status.toLowerCase()}`
                  : "item-wrap"
              }
            >
              <p className="item-title">{status}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
