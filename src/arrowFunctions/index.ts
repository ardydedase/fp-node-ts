// Ways of writing the function.

// function getWinningPercentage(wins: number, matches: number): number {
//     const result: number = matches / wins
//     return result
// }

// const getWinningPercentage = function(wins: number, matches: number): number {
//     const result: number = matches / wins
//     return result
// }

// const getWinningPercentage = (wins: number, matches: number): number => {
//     const result: number = matches / wins
//     return result
// }


// TODO: One-liner
const getWinningPercentage = (wins: number, matches: number): number => matches / wins

console.log(getWinningPercentage(3, 10))
