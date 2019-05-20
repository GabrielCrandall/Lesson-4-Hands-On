class Employee {
    constructor(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    getName() {
        console.log(this.name.toUpperCase());
    }
    getSalary() {
        console.log(this.salary);
    }
    getHireDate() {
        console.log(this.hireDate);
    }
}

class Manager extends Employee {
    constructor(name, salary, hireDate, descriptionOfJob) {
        super(name, salary, hireDate);
        this.descriptionOfJob = descriptionOfJob;
    }
    jobDescription() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes $" + this.salary + " because they " + this.descriptionOfJob);
    }
}

class Designer extends Employee {
    constructor(name, salary, hireDate, experience) {
        super(name, salary, hireDate);
        this.experience = experience;
    }
    yearsExperience() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes $" + this.salary + " because they have " + this.experience + " years of experience");
    }
}

class SalesAssociate extends Employee {
    constructor(name, salary, hireDate, degrees) {
        super(name, salary, hireDate);
        this.degrees = degrees;
    }
    degreeCompleted() {
        console.log(this.name + " was hired on " + this.hireDate + " and makes $" + this.salary + " because they have a " + this.degrees);
    }
}

let manager = new Manager("Jackie", 120000, "12-23-98", "manage the staff");
let designer = new Designer("John", 80000, "5-14-09", 9);
let sales = new SalesAssociate("Taylor", 45000, "2-30-18", "bachelor's degree");
manager.jobDescription();
designer.yearsExperience();
sales.degreeCompleted();