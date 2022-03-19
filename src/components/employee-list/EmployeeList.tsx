import "./EmployeeList.scss";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Employee } from "./employeeListUtils";
import EmployeeStatus from "../employee-status/EmployeeStatus";
import { getAll } from "../../api/api";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAll("employees").then((data) => setEmployees(data));
  }, []);

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
                <EmployeeStatus employee={employee} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
