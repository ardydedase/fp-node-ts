const minus = (minuend: number, subtrahend: number): number => minuend - subtrahend

const minuendGreaterThanSubtrahend = (func: Function) => 
    (...args) => {
        if (args[0] < args[1]) {
            console.log('minuend should be greater than the subtrahend')
            return null
        }
        return func(...args)
    }

const minusPositiveDifference = minuendGreaterThanSubtrahend(minus)

console.log(minusPositiveDifference(10, 3))
console.log(minusPositiveDifference(2, 10))