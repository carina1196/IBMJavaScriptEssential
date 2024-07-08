const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    specialization: "Javascript",
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HR",
    salary: 45000,
    specialization: "Python",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    specialization: "Java",
  },
  //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
  const totalEmployees = employees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");
  document.getElementById("details").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  document.getElementById(
    "details"
  ).innerHTML = `<p>Total Salaries: $${totalSalaries}</p>`;
}

function displayHREmployees() {
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );
  const hrEmployeesDisplay = hrEmployees
    .map(
      (employee, index) =>
        `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    )
    .join("");
  document.getElementById("details").innerHTML = hrEmployeesDisplay;
}

function findEmployeeById() {
  //   const findEmployeeByIDBtn = document.getElementById("findEmployeeByID");
  const employeeId = parseInt(document.getElementById("employeeID").value);

  console.log(employeeId);
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId
  );
  if (foundEmployee) {
    console.log(foundEmployee);
    document.getElementById(
      "details"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
  } else {
    console.log("no employee found");
    document.getElementById(
      "details"
    ).innerHTML = `<p>no employee has been found with this ID</p>`;
  }
}

function findEmployeeBySpecialization() {
  //   const findEmployeeBySpecializationBtn = document.getElementById(
  //     "findEmployeeBySpecialization"
  //   );
  const employeeSpecialization = document.getElementById(
    "employeeSpecialization"
  ).value;
  console.log(employeeSpecialization);
  const foundEmployee = employees.find(
    (employee) =>
      employee.specialization.toLowerCase() ===
      employeeSpecialization.toLowerCase()
  );
  if (foundEmployee) {
    console.log(foundEmployee);
    document.getElementById(
      "details"
    ).innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
  } else {
    console.log("no employee found");
    document.getElementById("details").innerHTML =
      "<p>no employee has been found with this specialization</p>";
  }
}

// findEmployeeByIDBtn.addEventListener("click", findEmployeeById(employeeId));
// findEmployeeBySpecializationBtn.addEventListener(
//   "click",
//   findEmployeeBySpecialization(employeeSpecialization)
// );
