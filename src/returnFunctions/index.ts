// NOTE: Starter code. Simple example
// const createGreeting = () => () => console.log('hello')
// createGreeting()()


// const createGreeting = function() {
//     return function() {
//         console.log('hello')
//     }
// }
// createGreeting()()

// NOTE: Example problem

// const meterToMile = (x: number): string => `${x * 0.0006213689} mi`
// const meterToYard = (x: number): string => `${x * 1.0936132983} yd`
// const meterToFoot = (x: number): string => `${x * 3.280839895} ft`
// const meterToInch = (x: number): string => `${x * 39.37007874} in`

// console.log(meterToMile(1000))
// console.log(meterToYard(3))
// console.log(meterToFoot(2))
// console.log(meterToInch(1))


// NOTE: Example solution

const createConverter = (s: string, v: number): Function => (x: number): string => `${x * v} ${s}`

const meterToMile = createConverter('mi', 0.0006213689)
const meterToYard = createConverter('yd', 1.0936132983)
const meterToFoot = createConverter('ft', 3.280839895)
const meterToInch = createConverter('in', 39.37007874)

console.log(meterToMile(1000))
console.log(meterToYard(3))
console.log(meterToFoot(2))
console.log(meterToInch(1))