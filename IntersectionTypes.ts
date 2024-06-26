type Person = { name: string };
type Employee = { employeeId: number };

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: 'John Doe',
  employeeId: 1234
};