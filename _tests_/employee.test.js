const Employee = require("../lib/Employee");

describe("Employee Class", () => {
    const employeeName = "Smith";
    const employeeId = 1234;
    const employeeEmail = "test@test.com";

    it("Test that class can be instantiated", () => {
        const newEmployeeObject = new Employee(employeeName, employeeId, employeeEmail);
        expect(typeof(newEmployeeObject)).toBe("object");
    })

    it("Test setting employee info", () => {
        const newEmployeeObject = new Employee(employeeName, employeeId, employeeEmail);
        expect(newEmployeeObject.name).toBe(employeeName);
        expect(newEmployeeObject.id).toBe(employeeId);
        expect(newEmployeeObject.email).toBe(employeeEmail);
    });

    it("Test getName()", () => {
        const newEmployeeObject = new Employee(employeeName);
        expect(newEmployeeObject.getName()).toBe(employeeName);
    });

    it("Test getId()", () => {
        const newEmployeeObject = new Employee(employeeName, employeeId);
        expect(newEmployeeObject.getId()).toBe(employeeId);
    });

    it("Test getEmail()", () => {
        const newEmployeeObject = new Employee(employeeName, employeeId, employeeEmail);
        expect(newEmployeeObject.getEmail()).toBe(employeeEmail);
    });

    it("Test getRole() default value", () => {
        const newEmployeeObject = new Employee(employeeName, employeeId, employeeEmail);
        expect(newEmployeeObject.getRole()).toBe("employee");
    });
})