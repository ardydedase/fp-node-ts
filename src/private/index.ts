const Employee = ({ name, jobTitle, monthlySalary }) => {
    let _name: string = name
    let _jobTitle: string = jobTitle
    let _monthlySalary: number = monthlySalary

    return {
        getName: (): string => _name,
        getJobTitle: (): string => _jobTitle,
        getMonthlySalary: (): number => _monthlySalary,
        setName: (name: string) => _name = name,
        setJobTitle: (jobTitle: string) => _jobTitle = jobTitle,
        setMonthlySalary: (monthlySalary: number) => _monthlySalary = monthlySalary,
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


employeeA.setJobTitle('Senior Engineer')
employeeA.setMonthlySalary(1200)
console.log(employeeA.getJobTitle())
console.log(employeeA.getMonthlySalary())