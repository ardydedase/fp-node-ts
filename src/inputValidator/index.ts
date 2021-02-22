const hasMinCharacters = (value: string, minLength: number=3): string => {
  return value.length >= minLength ? '' : 'Username should have at least 3 characters'
}

const hasValidEmail = (email: string): string => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()) ? '' : 'Enter a valid email'
}

const inputCriteria: Object = {
  username: [
    value => hasMinCharacters(value),
  ],
  email: [
    value => hasMinCharacters(value),
    value => hasValidEmail(value),
  ],
}

const currentInputValues: Object = {
  username: 'ar',
  email: 'me@',
}

const validateInputs = (inputs: Object, inputCriteria: Object): Array<string> => {
  return Object.keys(inputs).reduce((acc, field) => [
    ...acc,
    ...inputCriteria[field].map(test =>
        test(inputs[field])),
  ], []).filter(message => message)
}

console.log(validateInputs(currentInputValues, inputCriteria))

/*
Output:
[ 'Username should have at least 3 characters',
  'Enter a valid email' ]
*/