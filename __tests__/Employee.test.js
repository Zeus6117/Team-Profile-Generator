const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

const employeeResult = {
  name: "Max",
  id: "1",
  email: "Max@hello.com",
  role: "Employee",
};

test("Create a employee object", () => {
    const employee = new Employee(employeeResult);
    expect(employee.name).toBe("Max");
    expect(employee.id).toBe("1");
    expect(employee.email).toBe("Max@hello.com");
    expect(employee.role).toBe("Employee");
  });