An employees managment system.

The employee have four different states including the following

- ADDED
- IN-CHECK
- APPROVED
- ACTIVE
- INACTIVE

This is a frontend application using React / Typescript including the following features:

- A simple UI listing the employees
  The application need to use an API endpoint to retrieve the employee's list with the following specification :

  - GET /employees/
  - POST /employees/
  - PATCH /employees/{employee_id}

- In Every employee row, there should be a component which will be used to display the current state of this employee and by clicking on another state e.g. APPROVED, it should persist that change to this given employee.

To run the local server you should use 'npm run server' command.