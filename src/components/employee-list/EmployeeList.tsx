import "./EmployeeList.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Employee } from "./employeeListUtils";
import EmployeeStatus from "../employee-status/EmployeeStatus";
import { Status } from "../employee-status/employeeStatusUtils";

const employees: Employee[] = [
  {
    id: 1,
    name: "Ali Muhammad",
    status: Status.added,
  },
  {
    id: 2,
    name: "Mahmoud Ahmed",
    status: Status.active,
  },
  {
    id: 3,
    name: "Mohsen Ayman",
    status: Status.inactive,
  },
  {
    id: 4,
    name: "Noah Muhammad",
    status: Status.approved,
  },
  {
    id: 5,
    name: "Ibrahim Ali",
    status: Status.incheck,
  },
];

export default function EmployeeList() {
  return (
    <TableContainer className="table-container" component={Paper}>
      <Table sx={{ minWidth: 500 }} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee: Employee) => (
            <TableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {employee.name}
              </TableCell>
              <TableCell>
                <EmployeeStatus
                  employeeId={employee.id}
                  employeeStatus={employee.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
