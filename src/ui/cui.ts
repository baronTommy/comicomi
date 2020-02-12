import {ConventionalCommitsMessage, ConventionalCommitsMessageObj} from '~/domain'
type C = ConventionalCommitsMessageObj
const chalk = require('chalk')

// TODO 入力済みの判定は、値では不可能である
const inputOrDefault = {
  type: (inputted: C['type'], base: C['type']) => inputted ? `${inputted}` : `<${base}>`,
  scope: (inputted: C['body'], base: C['body']) => inputted ? `(${inputted}):` : `[${base}]:`,
  description: (inputted: C['description'], base: C['description']) => inputted ? `${inputted}` : `<${base}>`,
  body: (inputted: C['body'], base: C['body']) => inputted ? `${inputted}` : `[${base}]`,
  footer: (inputted: C['footer'], base: C['footer']) => inputted ? `${inputted}` : `[${base}]`,
}

type Tpl = (base: C, input: C)  => ConventionalCommitsMessage
export const tpl: Tpl = (base, inputted) =>
  `
${inputOrDefault.type(inputted.type, base.type)}${inputOrDefault.scope(inputted.scope, base.scope)} ${inputOrDefault.description(inputted.description, base.description)}

${inputOrDefault.body(inputted.body, base.body)}

${inputOrDefault.footer(inputted.footer, base.footer)}
`

export const decorationObj: C = {
  type: chalk.red('type'),
  scope: chalk.green('optional scope'),
  description: chalk.red('description'),
  body: chalk.green('optional body'),
  footer: chalk.green('optional footer'),
}
