const poemInput: string = 
`Hold fast to dreams
For if dreams die
Life is a broken-winged bird
That cannot fly
Hold fast to dreams
For when dreams go
Life is a barren field
Frozen with snow`.replace(/(\r\n|\n|\r)/gm, ' ')

console.log(poemInput.split(' '))

const countWords = words => {
  return words.reduce((wordCounter, word) => ({
    ...wordCounter,
    [word]: wordCounter[word] ? wordCounter[word] + 1: 1
  }), {})
}

console.log(countWords(poemInput.split(' ')))