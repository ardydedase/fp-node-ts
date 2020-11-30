const add = (a: number, b: number): number => a + b
const subtract = (a: number, b: number): number => a + b
const divide = (a: number, b: number): number => a / b
const multiply = (a: number, b: number): number => a * b

const calculate = (func: Function, a: number, b: number) => func(a, b)

console.log(calculate(add, 2, 1))
console.log(calculate(subtract, 5, 2))
console.log(calculate(divide, 16, 8))
console.log(calculate(multiply, 6, 4))
