// NOTE: Ways of writing the function.

// NOTE: regular function
// function getWinningPercentage(wins: number, matches: number): number {
//     const result: number = matches / wins
//     return result
// }

// NOTE: function assigned to variable
// const getWinningPercentage = function(wins: number, matches: number): number {
//     const result: number = matches / wins
//     return result
// }

// NOTE: Arrow function with return
// const getWinningPercentage = (wins: number, matches: number): number => {
//     const result: number = matches / wins
//     return result
// }


// NOTE: One-liner
// const getWinningPercentage = (wins: number, matches: number): number => matches / wins

const getWinningPercentage = (wins: number): number => wins / 50

console.log(getWinningPercentage(2))

const getPlayerProfile = (): {name: string, matches: number} => ({
    name: 'Ardy',
    matches: 40,
})

console.log(getPlayerProfile())
