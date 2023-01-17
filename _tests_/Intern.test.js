const Intern = require("../lib/Intern");

describe("Intern Class", () => {
    const employeeName = "Smith";
    const employeeId = 1234;
    const employeeEmail = "test@test.com";
    const employeeSchool = "University of Oregon";

    it("Verify Intern class extends Employee", () => {
        // name, id, and email are inherited from parent class (aka Employee)
        // This test is verifying those keys are present in the new object
        const newInternObject = new Intern();
        expect.objectContaining({
            name: expect.any(String),
            id: expect.any(String),
            email: expect.any(String),
        })
    })

    it("Verify School property", () => {
       const newInternObject = new Intern();
        expect.objectContaining({
            school: expect.any(String),
        }) 
    })
    
    it("Verify getSchool() method", () => {
        const newInternObject = new Intern(employeeName, employeeId, employeeEmail, employeeSchool);
        expect(newInternObject.getSchool()).toBe(employeeSchool);
    })
    
    it("Verify getRole() returned value", () => {
        const newInternObject = new Intern(employeeName, employeeId, employeeEmail);
        expect(newInternObject.getRole()).toBe("Intern");
    });
})