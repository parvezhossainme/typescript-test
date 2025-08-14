interface Employee {

    readonly employeeID : number;
    readonly startDate : Date;

    name: string;
    department: string
}


const newEmployee : Employee = {
    employeeID: 1,
    startDate: new Date(),
    name: "Parvez",
    department: "IT"
}

newEmployee.name = "Adnan"; // Changeable
// newEmployee.employeeID = 55; // Not Changeable