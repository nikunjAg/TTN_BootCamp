// Create a list of Employee with info as 

// 1. Name, age, salary ,DOB

const createEmployee = (name, age, salary, dob) => {
    const employee = {
        name: name,
        age: age,
        salary: salary,
        dob: new Date(dob)
    };

    return employee;
};

const employees = [
    createEmployee('Jatin', 22, 9000, '08/01/1999'),
    createEmployee('Aman', 17, 3000, '08/25/2004'),
    createEmployee('Harsh', 15, 14000, '08/25/2006'),
    createEmployee('Ayush', 25, 590, '08/25/1996'),
    createEmployee('Akshay', 20, 10000, '08/25/2001'),
    createEmployee('Manan', 10, 700, '08/25/2011'),
    createEmployee('Saksham', 14, 1200, '08/25/2007'),
    createEmployee('Amit', 7, 500, '08/25/2014'),
];

console.log(employees);


// 2. Filter all employees with salary greater than 5000

const salaryFilteredEmployees = employees.filter(e => e.salary > 5000);

console.log(salaryFilteredEmployees);


// 3. Group employee on the basis of their age
const ageGroupedEmployees = employees.reduce((groupedEmployees, curr) => {
    const groupStart = parseInt(curr.age / 5) * 5;
    const ageGroup = groupStart + "-" + (groupStart + 4);
    
    if (groupedEmployees[ageGroup] === undefined) {
        groupedEmployees[ageGroup] = [];
    }

    groupedEmployees[ageGroup].push(curr);

    return groupedEmployees;

}, {});

console.log(ageGroupedEmployees);


// 4. Fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
const salaryAgeFilteredEmployees = [];

for(let i = 0;i<employees.length;i++) {
    if (employees[i].salary < 1000 && employees[i].age > 20) {
        salaryAgeFilteredEmployees.push({ ...employees[i], salary: 6*employees[i].salary });
    }
}

console.log(salaryAgeFilteredEmployees);

