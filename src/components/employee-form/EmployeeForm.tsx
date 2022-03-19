import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import "./EmployeeForm.scss";
import { useState } from "react";
import { Employee } from "../employee-list/employeeListUtils";
import { Status } from "../employee-status/employeeStatusUtils";
import { post } from "../../api/api";
import { successToast } from "../../utils/toast";

type EmployeeFormProps = {
  onAddEmployee: Function;
};

export default function EmployeeForm(props: EmployeeFormProps) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newEmployee: Employee = { name: name, status: Status.added };
    post("employees", newEmployee).then(() => {
      props.onAddEmployee();
      setOpen(false);
      successToast("The employee is added successfully!");
    });
  };

  return (
    <>
      <Button
        className="add-employee"
        variant="outlined"
        onClick={handleClickOpen}
      >
        Add Employee
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add</DialogTitle>
          <DialogContent>
            <TextField
              id="name"
              label="Employee name"
              type="text"
              fullWidth
              variant="standard"
              onChange={handleNameChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button type="submit" disabled={name === ""}>
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}
