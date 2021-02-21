const poemInput: string = 
`Hold fast to dreams
For if dreams die
Life is a broken-winged bird
That cannot fly
Hold fast to dreams
For when dreams go
Life is a barren field
Frozen with snow`.replace(/(\r\n|\n|\r)/gm, ' ').toLowerCase()

// Functional approach
const countWords = (words: Array<string>) => {
  return words.reduce((wordCounter: Map<string, number>, word: string) => ({
    ...wordCounter,
    [word]: wordCounter[word] ? wordCounter[word] + 1: 1
  }), new Map<string, number>())
}

console.log(countWords(poemInput.split(' ')))

// Non-functional approach
let wordCounter = new Map<string, number>()
const countWordsNonFunc = words => {
  for (let word of words) {
    if (wordCounter.get(word) > 0) {
      wordCounter.set(word, wordCounter.get(word) + 1)
    } else {
      wordCounter.set(word, 1)
    }
  }
  console.log(wordCounter)
}

countWordsNonFunc(poemInput.split(' '))
