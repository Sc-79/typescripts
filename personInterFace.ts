type person = {
    name:string
};

type Employee = {
    emplopyeeId:number
};
type EmployeeDetails = person & Employee;

const employee:EmployeeDetails = {
    name: 'sourav chongrey',
    emplopyeeId: 100
};
