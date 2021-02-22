/*
Anagrams example: 

Tar = Rat
Arc = Car
Elbow = Below
State = Taste
Cider = Cried
Dusty = Study
Night = Thing
Inch = Chin
Brag = Grab
Cat = Act
Bored = Robed
Save = Vase
Angel = Glean
Stressed = Desserts
*/

const words: Array<string> = [
  'rat',      // tar
  'car',      // arc
  'below',    // elbow
  'taste',    // state
  'cried',    // cider
  'study',    // dusty
  'thing',    // night
  'chin',     // inch
  'grab',     // brag
  'act',      // cat
  'robed',    // bored
  'vase',     // save
  'glean',    // angel
  'desserts', // stressed
]

const countLetters = (word: Array<string>): Map<string, number> =>
  word.reduce((letterCounter: Map<string, number>, letter: string) => ({
    ...letterCounter,
    [letter]: letterCounter[letter] ? letterCounter[letter] + 1 : 1,
  }), new Map<string, number>())

const isSameLetterCount = (word1: string, word2: string): boolean => {
  const word1Count: Map<string, number> = countLetters(word1.split(''))
  const word2Count: Map<string, number> = countLetters(word2.split(''))

  return Object.keys(word1Count).length === Object.keys(word2Count).length
    && Object.keys(word1Count).every(letter => word1Count[letter] === word2Count[letter])
}

const getAnagrams = (input: string, words: Array<string>): Array<string> => {
  return words
    .filter(word => isSameLetterCount(input, word))
    .filter(anagram => anagram !== input)
}

console.log(getAnagrams('save', words))