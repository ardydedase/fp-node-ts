const Employee = ({ name, jobTitle, monthlySalary }) => {
    let _name: string = name
    let _jobTitle: string = jobTitle
    let _monthlySalary: number = monthlySalary

    return {
        getName: (): string => _name,
        getJobTitle: (): string => _jobTitle,
        getMonthlySalary: (): number => _monthlySalary,
    }
}

const employeeA = Employee({
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    monthlySalary: 1000,
})

console.log(employeeA.getName())
console.log(employeeA.getJobTitle())
console.log(employeeA.getMonthlySalary())
