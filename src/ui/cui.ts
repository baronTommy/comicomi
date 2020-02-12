import {ConventionalCommitsMessage, ConventionalCommitsMessageObj} from '~/domain'
const chalk = require('chalk')

// TODO 頑張る
const inputOrDefault = {
  type: (p: any, p2: any) => p ? `${p}` : `<${p2}>`,
  scope: (p: any, p2: any) => p ? `(${p}):` : `[${p2}]:`,
  description: (p: any, p2: any) => p ? `${p}` : `<${p2}>`,
  body: (p: any, p2: any) => p ? `${p}` : `[${p2}]`,
  footer: (p: any, p2: any) => p ? `${p}` : `[${p2}]`,
}

type Tpl = (obj: ConventionalCommitsMessageObj, input: any)  => ConventionalCommitsMessage
export const tpl: Tpl = (defaultObj, i) =>
  `
${inputOrDefault.type(i.type, defaultObj.type)}${inputOrDefault.scope(i.scope, defaultObj.scope)} ${inputOrDefault.description(i.description, defaultObj.description)}

${inputOrDefault.body(i.body, defaultObj.body)}

${inputOrDefault.footer(i.footer, defaultObj.footer)}
`

export const boxenConf = {
  float: 'center',
  padding: 2,
  borderColor: 'blue',
  margin: 2,
  borderStyle: 'double',
}

export const decoratedMessageObj: ConventionalCommitsMessageObj = {
  type: chalk.red('type'),
  scope: chalk.green('optional scope'),
  description: chalk.red('description'),
  body: chalk.green('optional body'),
  footer: chalk.green('optional footer'),
}
