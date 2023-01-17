const Manager = require("../lib/Manager");

describe("Manager Class", () => {
    const employeeName = "Smith";
    const employeeId = 1234;
    const employeeEmail = "test@test.com";
    const employeeOffice = "300";

    it("Verify Manager class extends Employee", () => {
        // name, id, and email are inherited from parent class (aka Employee)
        // This test is verifying those keys are present in the new object
        const newManagerObject = new Manager();
        expect.objectContaining({
            name: expect.any(String),
            id: expect.any(String),
            email: expect.any(String),
        })
    })

    it("Verify Office Number property", () => {
       const newManagerObject = new Manager();
        expect.objectContaining({
            officeNumber: expect.any(String),
        }) 
    })
    
    it("Verify getRole() returned value", () => {
        const newManagerObject = new Manager(employeeName, employeeId, employeeEmail);
        expect(newManagerObject.getRole()).toBe("Manager");
    });
})