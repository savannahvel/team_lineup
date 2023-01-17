const Engineer = require("../lib/Engineer");

describe("Engineer Class", () => {
    const employeeName = "Smith";
    const employeeId = 1234;
    const employeeEmail = "test@test.com";
    const employeeGithub = "savannahvel";

    it("Test Engineer class extends Employee", () => {
        // name, id, and email are inherited from parent class (aka Employee)
        // This test is verifying those keys are present in the new object
        const newEngineerObject = new Engineer();
        expect.objectContaining({
            name: expect.any(String),
            id: expect.any(String),
            email: expect.any(String),
        })
    })

    it("Verify Github property", () => {
       const newEngineerObject = new Engineer();
        expect.objectContaining({
            github: expect.any(String),
        }) 
    })
    
    it("Verify getGithub() method", () => {
        const newEngineerObject = new Engineer(employeeName, employeeId, employeeEmail, employeeGithub);
        expect(newEngineerObject.getGithub()).toBe(employeeGithub);
    })
    it("Verify getRole() returned value", () => {
        const newEmployeeObject = new Engineer(employeeName, employeeId, employeeEmail);
        expect(newEmployeeObject.getRole()).toBe("Engineer");
    });
})