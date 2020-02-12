const {prompt} = require('enquirer')

export type TypeList =  {
    choices: string[];
}
export const selectType = ({choices}: TypeList) => prompt({
  type: 'autocomplete',
  name: 'type',
  message: 'Select type...',
  limit: 10,
  choices,
})

export type ScopeList =  {
    choices: string[];
}
export const selectScope = ({choices}: ScopeList) => prompt({
  type: 'autocomplete',
  name: 'scope',
  message: 'Select scope...',
  limit: 10,
  choices,
})

export const inputDescription = () => prompt({
  type: 'input',
  name: 'description',
  message: 'Input description...',
})

export const inputBody = () => prompt({
  type: 'input',
  name: 'body',
  multiline: true,
  message: 'Input body...',
})

export const inputFooter = () => prompt({
  type: 'input',
  name: 'footer',
  message: 'Input footer...',
})
