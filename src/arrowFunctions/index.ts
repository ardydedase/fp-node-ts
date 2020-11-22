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
// const getWinningPercentage = (wins: number, matches: number): number => matches / wins

const getWinningPercentage = (wins: number): number => wins / 50

console.log(getWinningPercentage(2))

const getPlayerProfile = (): {name: string, matches: number} => ({
    name: 'Player Name',
    matches: 40,
})

console.log(getPlayerProfile())
