const {prompt} = require('enquirer')

export type TypeList =  {
    choices: string[];
}
export const selectType = ({choices}: TypeList) => prompt({
  type: 'autocomplete',
  name: 'type',
  message: '111111111 type  ?',
  limit: 10,
  choices,
})

export type ScopeList =  {
    choices: string[];
}
export const selectScope = ({choices}: ScopeList) => prompt({
  type: 'autocomplete',
  name: 'scope',
  message: '2222222 scope ?',
  limit: 10,
  choices,
})

export const inputDescription = () => prompt({
  type: 'input',
  name: 'description',
  message: '3333333333333 description ?',
})

export const inputBody = () => prompt({
  type: 'input',
  name: 'body',
  multiline: true,
  message: '44444444 body (multi line) ?',
})

export const inputFooter = () => prompt({
  type: 'input',
  name: 'footer',
  message: '5555 footer ?',
})
