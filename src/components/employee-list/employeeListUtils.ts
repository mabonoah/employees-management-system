import { Status } from "../employee-status/employeeStatusUtils";

export type Employee = {
    id: number;
    name: string;
    status: Status;
}