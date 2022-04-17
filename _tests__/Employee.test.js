test("Create a employee object", () => {
    const employee = new Employee("Max");
    expect(employee.name).toBe("Max");
  });