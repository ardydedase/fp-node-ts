// NOTE: Assign function to variable

const getSum = (a: number, b: number): number => a + b

console.log(getSum(1, 2))

// Assign to another variable
const addNumbers = getSum

console.log(addNumbers(1, 2))

// NOTE: Dynamically change the behavior of a function
const isLocal: boolean = true
const displayRunning = isLocal  
    ? () => console.log('Running locally') 
    : () => console.log('Not running locally')

displayRunning()

// NOTE: Example when used in mocking
const ENV: string = 'development'

// Live async call
const fetchData = () => {
    // time consuming live async call here.
}

// Mocked async call
const fetchMockData = (): {name: string, title: string} => ({
    name: 'John Doe',
    title: 'Software Engineer', 
})

const fetchDataForTesting = ENV == 'development' 
    ? fetchMockData
    : fetchData

console.log(fetchDataForTesting())

// NOTE: Example A/B testing or experimentation
const variantA = () => console.log('show variant A')
const variantB = () => console.log('show variant B')

const variantFunctionMap: object = {
    'A': variantA, 
    'B': variantB,
}

variantFunctionMap['A']()

// NOTE: Initialize Example using array with functions
// We want to create a Employee Object
let employee: object = {
    id: 1,
    isActive: true,
}
const addName = (person: object) => (
    {...person, name: 'John Doe'})
const addGender = (person: object) => (
    {...person, gender: 'Male'})
const addJobTitle = (person: object) => (
    {...person, title: 'Software Engineer'})
const addMonthlySalary = (person: object) => (
    {...person, monthlySalary: 1000})
const addAnnualSalary = (person: object) => (
    {...person, annualSalary: person['monthlySalary'] * 12})


// NOTE: Imperative way
// Start by passing the person object, 
// then pass the updatedPerson object in the succeeding functions.

employee = addName(employee)
employee = addGender(employee)
employee = addJobTitle(employee)
employee = addMonthlySalary(employee)
employee = addAnnualSalary(employee)
console.log(employee)

// NOTE: Functional way
const personFunctionsArray: Array<Function> = [
    addName,
    addGender,
    addJobTitle,
    addMonthlySalary,
    addAnnualSalary,
]

// personFunctionsArray.forEach(personFunc => person = personFunc(person))