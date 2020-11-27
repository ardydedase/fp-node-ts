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
    name: 'Ardy',
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
